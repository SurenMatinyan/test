import {messageModel, userModel} from '../models/index'


export class MessageController {
    public static sendMessage = async(data: any, user: any) => {
        const {message} = data 
        const sendMessage = await messageModel.create({message, UserId: user.id})
    }

    public static getMessage = async() => {
       try{
        const messages = await messageModel.findAll({
            attributes: ['message'],
            include: [{model: userModel, attributes: ["surname"]}],
            limit: 10
        })
        return messages
       }
       catch(err){
           console.log(err.message)
       }
    }
}