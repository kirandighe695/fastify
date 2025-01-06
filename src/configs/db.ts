import dotdev from 'dotenv';
dotdev.config();

export const config = {
    database: {
        host: process.env.DATABSE_HOST,
        port: parseInt(process.env.DATABSE_PORT || "3306"),
        user: process.env.DATABSE_USER,
        password: process.env.DATABSE_PASSWORD,
        database: process.env.DATABSE_NAME,
    }
}