import { Request, Response } from 'express';
import {userModel} from '../models/index'



export default class userControler {  


    public static login = async(req: Request, res: Response) => {
        try{
            await userModel.findAll()
            res.send("ok")
        }
        catch(err){
            res.json({message: 'serrver error'})
        }
    }
}