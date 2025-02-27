import { DataSource } from 'typeorm';
import { User } from '../models/User';
import { Category } from '../models/Category';
import { Product } from '../models/Product';

// Cargar variables de entorno desde el archivo .env
import * as dotenv from 'dotenv';
dotenv.config();

const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'db',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '12345678j',
    database: process.env.DB_NAME || 'inventory_system',
    entities: [User, Category,Product],
    synchronize: true,
    logging: false,
});

export default dataSource;
