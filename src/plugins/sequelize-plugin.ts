import { Sequelize } from "sequelize";
import { config } from "../configs/db";

const sequelize = new Sequelize(
    config.database.database || '',
    config.database.user || '',
    config.database.password,
    {
        host: config.database.host,
        dialect: 'mysql',
        port: Number(config?.database?.port) || 3306,
    }
);

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.debug('Database connection successfully')
        return { connected: true, databaseName: config.database.database, message: `Database connected successfully : ${config.database.database}` };
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return { connected: false, message: 'Database connection failed', error };
    }
}
export { sequelize, connectDatabase }