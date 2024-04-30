import { Server } from 'socket.io';
import http from 'http';

const qrcode = require('qrcode');
const fs = require('fs');
import * as whatsapp from 'wa-multi-session';


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

export async function  getAllSession(){
  const sessions = await whatsapp.getAllSession();

  console.log(sessions);

  await whatsapp.loadSessionsFromStorage();
  await whatsapp.onMessageReceived(async (msg) => {
    if (msg.key.fromMe) return;

    console.log(msg)

  });
}
export function initializeSocket(server: http.Server): void {

  
  const io = new Server(server);

  io.on('connection', function (socket: any) {

    socket.on('create-session', async (data: any) => {
      console.log('iniciando sessao')

      await whatsapp.startSession(data.uuid, {
        printQR: false
      });
    })

    whatsapp.onQRUpdated(({ sessionId, qr }) => {

      qrcode.toDataURL(qr, (err: any, url: any) => {

        console.log('lendo qrcode')
        socket.emit('qrCode', { id: sessionId, src: url });
        socket.emit('message', { id: sessionId, text: 'QR Code received, scan please!' });
      });

    });

    whatsapp.onConnected((sessionId) => {
      console.log('conectado')

      socket.emit('message', { id: sessionId, text: 'conected' });
    });

  });

}
