const socketIO = require('socket.io');
const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const http = require('http');
const fs = require('fs');
const { phoneNumberFormatter } = require('./helpers/formatter');

const SocketManager = function(server) {
  this.sessions = [];
  this.SESSIONS_FILE = './whatsapp-sessions.json';
  this.io = socketIO(server);
  this.configureSocketEvents();
  this.createSessionsFileIfNotExists();
  this.init();
};

SocketManager.prototype.configureSocketEvents = function() {
  this.io.on('connection', (socket) => {
    this.io.emit('connection', 'connection');
    this.init(socket);
    console.log('Client connected');

    socket.on('create-session', (data) => {
      console.log(data, 'saco');
      this.createSession(data.id, data.description);
    });

    socket.on('broadcastMessage', (message) => {
      console.log('Received broadcast message:', message);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

SocketManager.prototype.broadcast = function(message) {
  this.io.emit('broadcastMessage', message);
};

SocketManager.prototype.createSessionsFileIfNotExists = function() {
  console.log('Creating sessions file at path:', this.SESSIONS_FILE);
  if (!fs.existsSync(this.SESSIONS_FILE)) {
    try {
      fs.writeFileSync(this.SESSIONS_FILE, JSON.stringify([]));
      console.log('Sessions file created successfully.');
    } catch(err) {
      console.log('Failed to create sessions file: ', err);
    }
  }
};

SocketManager.prototype.setSessionsFile = function(sessions) {
  fs.writeFile(this.SESSIONS_FILE, JSON.stringify(sessions), (err) => {
    if (err) {
      console.log(err);
    }
  });
};

SocketManager.prototype.getSessionsFile = function() {
  return JSON.parse(fs.readFileSync(this.SESSIONS_FILE));
};

SocketManager.prototype.createSession = function(id, description) {
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
        '--single-process',
        '--disable-gpu'
      ],
    },
    authStrategy: new LocalAuth({
      clientId: id
    })
  });

  client.initialize();

  client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.toDataURL(qr, (err, url) => {
      this.io.emit('qr', { id: id, src: url });
      this.io.emit('message', { id: id, text: 'QR Code received, scan please!' });
    });
  });

  client.on('ready', () => {
    this.io.emit('ready', { id: id });
    this.io.emit('message', { id: id, text: 'Whatsapp is ready!' });

    const savedSessions = this.getSessionsFile();
    const sessionIndex = savedSessions.findIndex(sess => sess.id == id);
    savedSessions[sessionIndex].ready = true;
    this.setSessionsFile(savedSessions);
  });

  client.on('authenticated', () => {
    this.io.emit('authenticated', { id: id });
    this.io.emit('message', { id: id, text: 'Whatsapp is authenticated!' });
  });

  client.on('auth_failure', () => {
    this.io.emit('message', { id: id, text: 'Auth failure, restarting...' });
  });

  client.on('disconnected', (reason) => {
    this.io.emit('message', { id: id, text: 'Whatsapp is disconnected!' });
    client.destroy();
    client.initialize();

    const savedSessions = this.getSessionsFile();
    const sessionIndex = savedSessions.findIndex(sess => sess.id == id);
    savedSessions.splice(sessionIndex, 1);
    this.setSessionsFile(savedSessions);

    this.io.emit('remove-session', id);
  });

  // Adiciona o cliente às sessões
  this.sessions.push({
    id: id,
    description: description,
    client: client
  });

  // Adiciona a sessão ao arquivo
  const savedSessions = this.getSessionsFile();
  const sessionIndex = savedSessions.findIndex(sess => sess.id == id);

  if (sessionIndex == -1) {
    savedSessions.push({
      id: id,
      description: description,
      ready: false,
    });
    this.setSessionsFile(savedSessions);
  }
};

SocketManager.prototype.init = function(socket) {
  const savedSessions = this.getSessionsFile();
  if (savedSessions.length > 0) {
    if (socket) {
      socket.emit('init', savedSessions);
    } else {
      savedSessions.forEach(sess => {
        this.createSession(sess.id, sess.description);
      });
    }
  }
};

module.exports = SocketManager;
