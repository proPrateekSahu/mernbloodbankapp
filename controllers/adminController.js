const mongoose = require('mongoose');
const userModel = mongoose.model('users');

//GET DONAR LIST
const getDonarsListController = async (req, res) => {
  try {
    const donarData = await userModel
      .find({ role: 'donar' })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      totalCount: donarData.length,
      message: 'Donar List Fetched Successfully',
      donarData,
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error In DOnar List API',
      error,
    });
  }
};

//GET HOSPITAL LIST
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: 'hospital' })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      totalCount: hospitalData.length,
      message: 'Hospital List Fetched Successfully',
      hospitalData,
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error In Hospital List API',
      error,
    });
  }
};

//GET ORGANISATION LIST
const getOrgListController = async (req, res) => {
  try {
    const orgData = await userModel
      .find({ role: 'organisation' })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      totalCount: orgData.length,
      message: 'Org List Fetched Successfully',
      orgData,
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error In Org List API',
      error,
    });
  }
};

//DELETE DONAR || hospital || ORG
const deleteDonarController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: 'Record Deleted successfully',
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in delete API',
      error,
    });
  }
};



module.exports = {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
};
