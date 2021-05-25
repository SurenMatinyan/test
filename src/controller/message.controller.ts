/*import {messageModel} from '../models/index'


export class MessageController {
    public static sendMessage = async(req:Request, res:Response) => {
        const {message, id} = req.body as any
        const sendMessage = await messageModel.create({message, user_id: id})
    }

    public static getMessage = async(req:Request,res:Response) => {
        const messages = await messageModel.findAll({
            limit: 10
        })
    }
}*/