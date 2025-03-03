import UserModel from "../models/UserModel.js";
import { TokenEncode } from "../utils/tokenUtility.js";
export const Registration = async (req, res) => {
  try {
    let reqbody = req.body;
    let result = await UserModel.create(reqbody);
    return res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    let reqbody = req.body;
    let data = await UserModel.findOne(reqbody);
    console.log(data);
    if (data == null) {
      return res
        .status(404)
        .json({ status: "error", Message: "user not found" });
    } else {
      let token = TokenEncode(data["email"],data["password"], data["_id"]);
      return res
        .status(200)
        .json({ status: "success", Message: "login", data, token });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ProfileDetails = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let data = await UserModel.findOne({ _id: user_id });
    console.log(data);
    return res
      .status(200)
      .json({ status: "success", Message: "ProfileDetails" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ProfileUpdate = async (req, res) => {
  try {
    let reqbody = req.body;
    let user_id = req.headers["user_id"];
    let data = await UserModel.updateOne({ _id: user_id }, reqbody);
    return res.status(200).json({ status: "success", Message: "ProfileUpdate",data: data });

  } catch (error) {
    return res.status(500).json({ error: error.message });
    
  }
};

export const EmailVerify = async (req, res) => {
  return res.status(200).json({ status: "success", Message: "EmailVerify" });
};

export const CodeVerify = async (req, res) => {
  return res.status(200).json({ status: "success", Message: "CodeVerify" });
};

export const ResetPassword = async (req, res) => {
  return res.status(200).json({ status: "success", Message: "ResetPassword" });
};
