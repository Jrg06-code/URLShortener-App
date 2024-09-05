
import app from './app'
import "reflect-metadata"
import { AppDataSource } from "./domain/db/data-source"
import { envs } from './config/index'
import { dbConection } from './domain/db/db-conection'



(async ()=>{
await main()
})()



async function main(){

await dbConection()
app.listen(envs.PORT, ()=>{
    console.log('listen on port 3000')
})
}
