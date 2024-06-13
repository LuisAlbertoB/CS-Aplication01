import { Application } from 'express';
import { notificacionesRouter } from './controllers/notificacionesController';

export const routes = (app: Application) => {
  app.use('/notificaciones', notificacionesRouter);
  // Aquí puedes añadir más rutas
};
