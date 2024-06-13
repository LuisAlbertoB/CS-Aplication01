import express from 'express';
import { Server as WebSocketServer } from 'ws';
import { routes } from './routes';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000; // Puerto para el servidor HTTP

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Inicializar rutas HTTP
routes(app);

// Iniciar servidor HTTP
const server = app.listen(port, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${port}`);
});

// Iniciar servidor WebSocket
const wss = new WebSocketServer({ server });
wss.on('connection', ws => {
  console.log('Cliente WebSocket conectado');
  // Manejar la conexión WebSocket aquí
});

export { wss }; // Exportar para usar en otros archivos si es necesario
