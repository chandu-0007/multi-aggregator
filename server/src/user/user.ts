import { application, Router } from "express"
import type { Request , Response } from "express" ;
const router = Router() 

router.get('/' , (req : Request , res  : Response ) => {
    res.send("user roure is working")
   console.log("user route is called ")
})
export default router ; 