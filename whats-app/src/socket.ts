import { Server, Socket } from 'socket.io';
import http from 'http';
import { url } from 'inspector';
const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');
import { PrismaService } from './base/relacional/PrismaService';

const qrcode = require('qrcode');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const sessions = [];
const SESSIONS_FILE = './whatsapp-sessions.json';

const prisma = new PrismaService()

import MessageDTO from './dto/dto-MessageDTO';
export async function getContacts(id: any) {


  try {
    console.log('get: ' + id);
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
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html',
      },
      authStrategy: new LocalAuth({
        clientId: id
      })
    });
    // Inicialize o cliente aqui
    client.initialize();


    // return contacts
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }

}

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


const getSessionsFile = async function () {

  const session = await prisma.chat_info.findMany({
    select: {
      uuid: true,
      configuracaoCliente: {
        select: {
          id: true
        }
      }
    }
  });
  console.log(session)
  return session.map((s) => {
    if (s.configuracaoCliente?.id && s.uuid) {
      return {
        id: s.uuid + s.configuracaoCliente?.id,
        ready: true       

      }
    }

  }) || [];
}

const removeSession = (id: any, io?: any) => {
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
      type: 'remote',
      remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html',
    },
    authStrategy: new LocalAuth({
      clientId: id
    })
  });

  client.destroy();
  client.initialize();
  getSessionsFile();


}
const createSession = function (id: any, io?: any) {
  try {
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
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2409.0.html',
      },
      authStrategy: new LocalAuth({
        clientId: id
      })
    });

    client.initialize();

    client.on('qr', async (qr: any) => {


      qrcode.toDataURL(qr, (err: any, url: any) => {

        if (io) {
          io.emit('qrCode', { id: id, src: url });
          io.emit('message', { id: id, text: 'QR Code received, scan please!' });
        }

      });


    });

    client.on('ready', async () => {
      if (io) {
        io.emit('ready', { id: id });
        io.emit('message', { id: id, text: 'Whatsapp is ready!' });

      }
   getSessionsFile();
      

      // const getContacts = await client.getContacts();

      // const contatos = await getContacts.map(async (contato: any) => {

      //   if (contato.id != null && contato.id._serialized != null) {

      //     const urlLink = await client.getProfilePicUrl(contato.id._serialized);

      //     const c = {
      //       nome: contato.pushname,
      //       telefone: contato.number,
      //       link: urlLink
      //     }

      //     return c;

      //   }

      // });

      // console.log(contatos)



    });
    client.on('message', async (message: any) => {

      if (message && !message.title && !message.description) {

        let clientId = Number(id.substr(id.length - 1));

        const msgDto = new MessageDTO(message);
        let from = String(message.from).split('@')[0];
        let user_name = msgDto.nome != null ? msgDto.nome : from
        console.log('user_name', user_name)

        const chat_info = await prisma.chat_info.findFirst(
          {
            where: {
              cliente_id: clientId,
              type: 'WhatsApp-qrcode'
            }
          }

        );

        if (chat_info) {

          const chat = await prisma.chat.findFirst({
            where: {
              telefone: from,
              cliente_id: clientId
            }
          });

          if (chat) {

            await prisma.messages.create({
              data: {
                chat_id: chat.chat_id,
                username: user_name,
                atendimento: false,
                text: msgDto.msg,
                type: 'txt',
                whatsapp_id: String(msgDto.whatsapp_id)
              }
            });

          } else {
            const data = {
              nome: user_name,
              uuid: uuidv4(),
              chat_id: chat_info.chat_info_id,
              cliente_id: chat_info.cliente_id,
              telefone: from
            }

            const chat = await prisma.chat.create({
              data: data
            });

            if (chat) {

              await prisma.messages.create({
                data: {
                  chat_id: chat.chat_id,
                  username: String(user_name),
                  atendimento: false,
                  text: msgDto.msg,
                  type: 'txt',
                  whatsapp_id: String(msgDto.whatsapp_id)
                }
              });

            }

          }


        }

      }

    })
    client.on('authenticated', async () => {
      if (io) {
        io.emit('authenticated', { id: id });
        io.emit('message', { id: id, text: 'conected' });
      }
      console.log('Whatsapp is authenticated!');


    });

    client.on('auth_failure', function () {
      console.log('Auth failure, restarting...')
      if (io) {
        io.emit('message', { id: id, text: 'Auth failure, restarting...' });
      }
    });

    client.on('disconnected', (id: any) => {
      if (io) {
        io.emit('message', { id: id, text: 'Whatsapp is disconnected!' });
      }
      client.destroy();
      client.initialize();



      // Menghapus pada file sessions
     getSessionsFile();
    

      if (io) {
        io.emit('remove-session', id);
      }
    });

    // Tambahkan client ke sessions
    sessions.push({
      id: id,
      client: client
    });

    // Menambahkan session ke file
    getSessionsFile();
  
  } catch (error) {
    console.error("Error initializing client:", error);
  }
}

const init = async function (socket?: any) {
  const savedSessions = await getSessionsFile();

  if (savedSessions.length > 0 && !socket) {

    savedSessions.forEach((sess: any) => {
      createSession(sess.id);
    });
  }
}

init();


export function initializeSocket(server: http.Server): void {

  const io = new Server(server);

  io.on('connection', function (socket: any) {
    init(socket);

    socket.on('create-session', function (data: any) {
      console.log('Create session: ' + data.uuid);
      createSession(data.uuid, socket);
    });

    socket.on('disconnected', function (data: any) {
      console.log('disconnected session: ' + data.id);
      removeSession(data.uuid, socket);
    });

  });

}
