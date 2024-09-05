import {z} from 'zod'

export const createShortSchema= z.object({
    URL: z.string().url()
      
})