import 'dotenv/config';
import {get} from 'env-var'


export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    // POSTGRES_USER: get('POSTGRES_USER').required().asString(),
    // POSTGRES_DB: get('POSTGRES_DB').required().asString(),
    // POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),
     POSTGRES_URL: get('POSTGRES_URL').required().asString(),
}


