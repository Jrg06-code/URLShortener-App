import { Request, Response } from "express";
import { createShortService, getShortService } from "../services/short.services";

const handlingErrors= (error:unknown,res:Response)=>{
    if(error instanceof Error)res.status(400).json({ok:false, message:error.message})

}

const createShort = (req:Request,res:Response)=>{
    const {URL}=req.body
    createShortService(URL).then(short=>res.json({ok:true, URL:short})).catch(error=>res.json(error))
}
const getShortByID = (req:Request, res:Response) => {
    const {id}=req.params
    const {host} = req.headers; 
    
   console.log({id,host}) // URL de la API REST externa
   getShortService(id).then(url=>res.redirect(url)).catch(err=>res.redirect('/'))
 
   
  };



export {
    createShort,
    getShortByID
}