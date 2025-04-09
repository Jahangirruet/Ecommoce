import {EmailSend} from "../utils/EmailHelper.js";
import UserModel from "../models/UserModel.js";
export const OTPService = async (req) => {

   try {
      let email = req.params.email;
      let code = Math.floor(10000 + Math.random() * 900000);
      let EmailText = `Your OTP is ${code}`
      let EmailSubject = "email verifucation";
      await EmailSend(email,EmailText,EmailSubject);
      await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true});
      return {status:"success",message:"otp send",email:email,otp:code};
      
   } catch (error) {
      return {status:"errors",message:error.message};
   }
};

export const VerifyLoginService = async (req) => {
   
};

export const LogputService = async (req) => {
   
};
export const CreateProfileService = async (req) => {
   
};

export const UpdateProfileService = async (req) => {
   
};

export const ReadProfileService = async (req) => {   
};