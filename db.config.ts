import { createPool } from 'mysql';

// Configuración de la conexión a la base de datos MySQL
export const pool = createPool({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
});

