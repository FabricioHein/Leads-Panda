import { Server, Socket } from 'socket.io';
import http from 'http';
const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');

const qrcode = require('qrcode');
const fs = require('fs');

const sessions = [];
const SESSIONS_FILE = './whatsapp-sessions.json';

const arrayBufferToBase64 = (buffer: any) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
const getImageAsBlob = (path: any) => {
  return new Promise((resolve, reject) => {
    try {
      // Ler o arquivo da imagem como um Buffer
      const imageBuffer = fs.readFileSync(path);

      // Converter o Buffer em um Blob
      const imageBlob = new Blob([imageBuffer], { type: 'image/png' }); // ou ajuste o tipo de acordo com o tipo da imagem

      // Resolver a promessa com o Blob
      resolve(imageBlob);
    } catch (error) {
      // Rejeitar a promessa com o erro
      reject('Erro ao ler a imagem: ' + error);
    }
  });
}
const saveQRCodeImage = (qrCodeData: any, id: any) => {
  return new Promise((resolve, reject) => {
    qrcode.toFile(`./src/qr_code-${id}.png`, qrCodeData, (err: any) => {
      if (err) {
        reject('Erro ao salvar o QR code: ' + err);
      } else {
        resolve(`./src/qr_code-${id}.png`);
      }
    });
  });
}
const createSessionsFileIfNotExists = function () {
  if (!fs.existsSync(SESSIONS_FILE)) {
    try {
      fs.writeFileSync(SESSIONS_FILE, JSON.stringify([]));
      console.log('Sessions file created successfully.');
    } catch (err) {
      console.log('Failed to create sessions file: ', err);
    }
  }
}

createSessionsFileIfNotExists();

const setSessionsFile = function (sessions: any) {
  fs.writeFile(SESSIONS_FILE, JSON.stringify(sessions), function (err: any) {
    if (err) {
      console.log(err);
    }
  });
}

const getSessionsFile = function () {
  return JSON.parse(fs.readFileSync(SESSIONS_FILE));
}

const initSession = function (id: any, io?: any) {
  console.log('Creating session: ' + id);
  const client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu'
      ],
    }, 
    webVersionCache: {
      remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2402.5-beta.html',
      type: 'remote'
    },
    authStrategy: new LocalAuth({
      clientId: id
    })
  });

  client.initialize();
}
const removeSession = (id: any, io?: any)=>{
  const client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu'
      ],
    }, 
    webVersionCache: {
      remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2402.5-beta.html',
      type: 'remote'
    },
    authStrategy: new LocalAuth({
      clientId: id
    })
  });

  client.destroy();
  client.initialize();

  const savedSessions = getSessionsFile();
  const sessionIndex = savedSessions.findIndex((sess: any) => sess.id == id);
  savedSessions.splice(sessionIndex, 1);
  setSessionsFile(savedSessions);

  io.emit('remove-session', 'Deletado com Sucesso!');

}
const createSession = function (id: any, io?: any) {
  try{
  const client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu'
      ],
    },
    webVersionCache: {
      remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2332.15.html',
      type: 'remote'
    },
    authStrategy: new LocalAuth({
      clientId: id
    })
  });

  client.initialize();

  client.on('qr', async (qr: any) => {


    qrcode.toDataURL(qr, (err: any, url: any) => {

      io.emit('qrCode', { id: id, src: url });
      io.emit('message', { id: id, text: 'QR Code received, scan please!' });
    });


  });

  client.on('ready', () => {
    io.emit('ready', { id: id });
    io.emit('message', { id: id, text: 'Whatsapp is ready!' });

    const savedSessions = getSessionsFile();
    const sessionIndex = savedSessions.findIndex((sess: any) => sess.id == id);
    savedSessions[sessionIndex].ready = true;
    setSessionsFile(savedSessions);
    
  });

  client.on('authenticated', async () => {
    io.emit('authenticated', { id: id });
    console.log('Whatsapp is authenticated!');


    

    io.emit('message', { id: id, text: 'conected' });

    // client.getContacts()
    //   .then(async (contatos: any) => {

    //     await contatos.map(async (contato: any) => {

    //       if (contato.id != null && contato.id._serialized != null ) {


    //           await client.getProfilePicUrl(contato.id._serialized).then(async (URL: any) => {


    //             if (URL != null) {
    //               console.log(URL)

    //             }
    //             else {
    //                 console.log('***  FALHA - Url retornada é nula');
                   
    //             }
    //         });

    //       }

    //     })


    //   });

  });

  client.on('auth_failure', function () {
    console.log('Auth failure, restarting...')
    io.emit('message', { id: id, text: 'Auth failure, restarting...' });
  });

  client.on('disconnected', (reason: any) => {
    io.emit('message', { id: id, text: 'Whatsapp is disconnected!' });
    client.destroy();
    client.initialize();



    // Menghapus pada file sessions
    const savedSessions = getSessionsFile();
    const sessionIndex = savedSessions.findIndex((sess: any) => sess.id == id);
    savedSessions.splice(sessionIndex, 1);
    setSessionsFile(savedSessions);

    io.emit('remove-session', id);
  });

  // Tambahkan client ke sessions
  sessions.push({
    id: id,
    client: client
  });

  // Menambahkan session ke file
  const savedSessions = getSessionsFile();
  const sessionIndex = savedSessions.findIndex((sess: any) => sess.id == id);

  if (sessionIndex == -1) {
    savedSessions.push({
      id: id,
      ready: false,
    });
    setSessionsFile(savedSessions);
  }
  }catch (error) {
    console.error("Error initializing client:", error);
  }
}

const init = function (socket?: any) {
  const savedSessions = getSessionsFile();

  if (savedSessions.length > 0 && !socket) {

    savedSessions.forEach((sess: any) => {
      initSession(sess.id);
    });
  }
}

init();


export function initializeSocket(server: http.Server): void {

  const io = new Server(server);

  io.on('connection', function (socket: any) {
    init(socket);

    socket.on('create-session', function (data: any) {
      console.log('Create session: ' + data.id);
      createSession(data.id, socket);
    });

    socket.on('disconnected', function (data: any) {
      console.log('disconnected session: ' + data.id);
      removeSession(data.uuid, socket);
    });
   
  });

}
