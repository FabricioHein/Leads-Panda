import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import http from 'http'; // Importe o módulo http
import { initializeSocket, getContacts} from './socket'; // Importe a função initializeSocket do arquivo socket.ts



const app: Application = express();
const server = http.createServer(app); // Crie um servidor HTTP passando o app do Express

// Express Middlewares
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:8080/'
}));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json());

// Root Route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to Typescript Node.js Server Setup Guide!!!' });
});

app.get('/getContatos', (req: Request, res: Response) => {

  const contatos = getContacts('7b19df9a-72b6-4052-9b6e-532c1c8dceef');

  res.status(200).json({ contacts: contatos });
});

// Server Health Check
app.get('/health-check', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

// Initialize socket.io
initializeSocket(server);


// Start the server
const port = process.env.PORTA_SERVER;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
