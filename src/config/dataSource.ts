import { DataSource } from 'typeorm';
import { User } from '../models/User';
import { Category } from '../models/Category';

// Cargar variables de entorno desde el archivo .env
import * as dotenv from 'dotenv';
dotenv.config();

const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3308', 10),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '12345678j',
    database: process.env.DB_NAME || 'inventory_system',
    entities: [User, Category],
    synchronize: true,
    logging: false,
});

export default dataSource;
