import {OTPService} from "../services/UserServices.js";

export const UserOTP = async function (req, res) {
  try {
    let result = await OTPService(req)
   return res.status(200).json(result)
    
  } catch (error) {
    return res.status(400).json({ status: "error", Message: error.message });
  }
  
}

export const VerifyLogin = async function (req, res) {
  
}

export const UserLogout = async function (req, res) {
  
}


export const CreateProfile = async function (req, res) {
  
}

export const UpdateProfile = async function (req, res) {
  
}

export const ReadProfile = async function (req, res) {
  
}