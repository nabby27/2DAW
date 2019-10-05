import mysql, { Pool } from 'mysql';

const port: string = process.env.DB_PORT || '3306';

const db: Pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(port, 10),
});

export default db;
