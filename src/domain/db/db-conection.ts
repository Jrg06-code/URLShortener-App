import { AppDataSource } from "./data-source"

export const dbConection = ()=>{
    try {
        AppDataSource.initialize()

        console.log('conectado corectamente')
    } catch (error) {
        console.log('error al conectar a la base de datos')
    }
}