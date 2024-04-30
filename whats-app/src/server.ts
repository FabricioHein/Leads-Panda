import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import http from 'http'; // Importe o módulo http
import { initializeSocket, getAllSession} from './socket'; // Importe a função initializeSocket do arquivo socket.ts

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

// Server Health Check
app.get('/health-check', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

getAllSession();
// Initialize socket.io
initializeSocket(server);


// Start the server
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
