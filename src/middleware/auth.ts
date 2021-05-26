import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {userModel} from '../models'



const auth = async(req: any) => {
    try {
        if(req.handshake.auth.token){
            const token = req.handshake.auth.token
            const decoded: any = jwt.verify(token, "123sdcasdasczx");
              if(decoded){
                const user = await userModel.findOne({
                    where: { email: decoded.email}
                })  
                if (user) {
                  req.user = user;
                  return true
                }
              }
              return false  
        } 
        return false
      } catch (err) {
        return false
      }
} 


export default auth;