const { VerifyTkn } = require("../services/helpers");
const { responseHandler } = require("../utils/responseHandler");

const authMiddleWare = (async = (req, res, next) => {
  try {
    const token = req.cookies;
    console.log(token["R-XS-Token"]);
    if (!token["R-XS-Token"])
      return responseHandler.error(res, 400, "Invalid Request");
    const decoded = VerifyTkn(token["R-XS-Token"]);
    console.log(decoded);
  } catch (error) {}
});

module.exports = authMiddleWare;
