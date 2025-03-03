import jwt from 'jsonwebtoken';
import { JWT_KEY,JWT_EXPIRED_TIME } from '../config/config.js';

export const TokenEncode = (email, user_id)=>{
   let KEY = JWT_KEY;
   let EXPIRE = {expiresIn:JWT_EXPIRED_TIME};
   let PAYLOAD = {email:email,user_id:user_id};

   return jwt.sign(PAYLOAD,KEY,EXPIRE);

}
export const TokenDecode = (token)=>{
   try {
      return jwt.verify(token,JWT_KEY);
   } catch (error) {
      return console.error(error);
   }
}