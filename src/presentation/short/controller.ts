import { Request, Response } from "express";
import { createShortService, getShortService } from "../services/short.services";

const handlingErrors= (error:unknown,res:Response)=>{
    if(error instanceof Error)res.status(400).json({ok:false, message:error.message})

}

const createShort = (req:Request,res:Response)=>{
    const {URL}=req.body
    createShortService(URL).then(short=>res.json({ok:true, URL:short})).catch(error=>res.json(error))
}
const getShortByID = (req:Request,res:Response)=>{
    const {id}=req.params
    if(!id) throw new Error('id invalido')
   
    getShortService(id).then(url=>res.json({ok:true, URL:url})).catch(err=>handlingErrors(err,res))
}



export {
    createShort,
    getShortByID
}