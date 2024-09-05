import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export const schemaValidationMiddleware = (schema:ZodSchema)=>(req:Request,res:Response,next:NextFunction)=>{
    
   try {
    schema.parse(req.body)
    next()
   } catch (error) {
    if(error instanceof ZodError) error.issues.map(issue=>res.status(400).json({ok:false,message:`${ issue.path} is ${issue.message}`}))
   }
}