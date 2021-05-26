import { Request, Response } from 'express';
import {userModel} from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'



export default class userControler {  


    public static login = async(req: Request, res: Response) => {
        try{
            const { email, password }  = req.body;
            if(email && password){
                const user = await userModel.findOne({
                    where: {email}
                });
                const match = await bcrypt.compare(password, user!.password);
                if(user && match){
                    const token = jwt.sign({ email: user.email, name: user.surname }, "123sdcasdasczx");
                    return res.json({token});
                }
                return res.status(400).json({message: "incorrect email or password"});
            } 
            return res.status(400).json({message: "line is not filled"});
          }
          catch(err){
            res.status(500)
          }
    }

    public static signUp = async(req: Request, res: Response) => {
        try{
            const { surname, username, email, password } = req.body;
            if(surname && username && email && password){
                const hashPass = await bcrypt.hash(password, 12);
                const user = await userModel.create({ surname, username, email, password: hashPass })
                const token = jwt.sign({ email: user.email, name: user.surname }, "123sdcasdasczx");
                return res.json({token});
            }
            return {message: '"you did not fill in the entire field"'}
        }
        catch(err){
            res.status(500).json({message: "server error", err: err.message})
        }
    }
}