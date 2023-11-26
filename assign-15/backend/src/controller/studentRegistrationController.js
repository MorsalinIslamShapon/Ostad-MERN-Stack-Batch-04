const studentRegistrationModel = require("../model/studentRegistrationModel");

exports.createStudentData = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await studentRegistrationModel.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(500).json({ status: "fail", data: err });
  }
};
exports.updateStudentData = async (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  let reqBody = req.body;
  try {
    let result = await studentRegistrationModel.updateOne(query, reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(500).json({ status: "fail", data: err });
  }
};
exports.deleteStudentData = async (req, res) => {
  let id = req.params.id;
  let query = { _id: id };

  try {
    let result = await studentRegistrationModel.deleteOne(query);
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(500).json({ status: "fail", data: err });
  }
};
exports.readStudentData = async (req, res) => {
  try {
    let result = await studentRegistrationModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(500).json({ status: "fail", data: err });
  }
};
exports.readStudentDataById = async (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  try {
    let result = await studentRegistrationModel.find(query);
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(500).json({ status: "fail", data: err });
  }
};
