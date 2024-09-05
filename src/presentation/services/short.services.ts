import { nanoid } from "nanoid"
import { Shorts } from "../../domain/db/model/Shorts"
import { envs } from "../../config"


const createShortService=async (url:string)=>{
try {
    const short=new Shorts()
short.id=nanoid(6)
short.url=url

await short.save()
return short.id
} catch (error) {
    console.log(error)
    throw error
}
}

const getShortService=async(id:string)=>{
    try {
        const short= await Shorts.findOneBy({id:id})
       
    if(!short) throw new Error('El id no existe')
      
        return short.url
    } catch (error) {
        
        throw error;
       
        
    }  
}

export {
    createShortService,
    getShortService
}