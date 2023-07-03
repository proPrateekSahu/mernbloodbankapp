const mongoose = require('mongoose');
const userModel = mongoose.model('users');
module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.userId);
    // console.log(user);
    if (user?.role !== 'admin') {
      return res.status(401).send({
        success: false,
        message: 'Auth Failed',
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: 'Auth Failed ADMIN API',
      error,
    });
  }
};
