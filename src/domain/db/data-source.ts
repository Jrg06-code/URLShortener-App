import { DataSource } from "typeorm";
import { envs } from "../../config/envs";
import { Shorts } from "./model/Shorts";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    url: envs.POSTGRES_URL,
    // port: 5432,
    // username: envs.POSTGRES_USER,
    // password: envs.POSTGRES_PASSWORD,
    // database: envs.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [Shorts],
    subscribers: [],
    migrations: [],
})