import express from 'express'
import path from 'path'
import  router  from './presentation/router'
import cors from 'cors'
import { getShortService } from './presentation/services/short.services'
const app=express()

const publicPath='public'


//middlewares
app.use(express.json())

app.use(cors());

//PublicFolder
app.use(express.static(publicPath))
//Routes
app.use(router)
//SPA

app.get('*', (req,res)=>{
    const indexPath = path.join(__dirname, `../${publicPath}`, 'index.html');
    res.sendFile(indexPath)
})


export default app;


