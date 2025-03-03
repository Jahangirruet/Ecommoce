import mongoose from "mongoose";
//import TaskModel from "../models/TaskModel.js";
export const CreateTask = async (req, res) => {
  try {
    let reqbody = req.body;
    let user_id = req.headers["user_id"];
    reqbody.user_id = user_id;
    console.log(reqbody);
    await TaskModel.create(reqbody);

    return res.status(200).json({ status: "success", Message: "CreateTask" });
  } catch (error) {
    req.status(400).json({ status: "error", Message: error.message });
  }
};

export const UpdateTask = async (req, res) => {
  try {
    let id = req.params.id;
    let status = req.params.status;
    let user_id = req.headers["user_id"];
    let data = await TaskModel.updateOne({ _id: id, "user_id": user_id }, { status: status });
    console.log(data);
    res.status(200).json({ status: "success", Message: "UpdateTask",data:data });
  }
  catch (error) {
    return res.status(400).json({ status: "error", Message: error.message });
  }
};

export const TaskListByStatus = async (req, res) => {
try {
  let id = req.params.id;
  let status = req.params.status;
  let user_id = req.headers["user_id"];
  let data = await TaskModel.find({ "user_id": user_id, status: status });
  console.log(data);
  res.status(200).json({ status: "success", Message: "TaskListByStatus",data:data });

} catch (error) {
  return res.status(400).json({ status: "error", Message: error.message });
  
}
};

export const DeleteTask = async (req, res) => {
  try {
    let id = req.params.id;
    let status = req.params.status;
    let user_id = req.headers["user_id"];
    let data = await TaskModel.deleteOne({ _id: id, "user_id": user_id });
    res.status(200).json({ status: "success", Message: "data deleted"});
    return res.status(200).json({ status: "success", Message: "DeleteTask" });
  } catch (error) {
    return res.status(400).json({ status: "error", Message: error.message });
    
  }
  
};

export const CountTask = async (req, res) => {
  try{
    let objectID = mongoose.Types.ObjectId;
    let user_id = req.headers["user_id"];
    let user_id_object = new objectID(user_id);

    let data = await TaskModel.aggregate([
      { $match: { user_id: user_id_object } },
      { $group: { _id: "$status", sum: { $count: {} } } },
    ])

    res.status(200).json({ status: "success", Message: "CountTask",data:data });


  }
  catch{
    return res.status(400).json({ status: "error", Message: error.message });
  }
  
};
