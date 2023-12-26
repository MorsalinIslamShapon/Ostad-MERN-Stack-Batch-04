const {
  userOTPService,
  verifyOTPService,
  SaveProfileService,
  ReadProfileService,
} = require("../services/UserService");

exports.UserOTP = async (req, res) => {
  const result = await userOTPService(req);
  return res.status(200).json(result);
};

exports.VerifyLogin = async (req, res) => {
  const result = await verifyOTPService(req);
  if (result["status"] === "success") {
    //cookie set
    let cookieOption = {
      expires: new Date(Date.now() + 24 * 6060 * 10000),
      httpOnly: false,
    };
    res.cookie("token", result["token"], cookieOption);
    return res.status(200).json(result);
  } else {
    return res.status(200).json(result);
  }
};

exports.UserLogOut = async (req, res) => {

  let cookieOption = {
    expires: new Date(Date.now() - 24 * 6060 * 10000),
    httpOnly: false,
  };
  res.cookie("token", result["token"], cookieOption);
  return res.status(200).json({status:"success"});
};


exports.CreateProfile = async (req, res) => {
  const result = await SaveProfileService  (req);
  return res.status(200).json(result);
  
};
exports.UpdateProfile = async (req, res) => {
  const result = await SaveProfileService  (req);
  return res.status(200).json(result);
  
};

exports.ReadProfile = async (req, res) => {
  const result = await ReadProfileService(req);
  return res.status(200).json(result);
};
exports.CreateProductReview = async (req, res) => {};

