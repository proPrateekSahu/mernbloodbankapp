const express = require('express');
const authmiddelware = require('../middlewares/authMiddelware');
const adminmiddelware = require('../middlewares/adminMiddelware');
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require('../controllers/adminController');

const router = express.Router();

//routes
// GET || Donar List
router.get(
  '/donar-list',
  authmiddelware,
  adminmiddelware,
  getDonarsListController
);

//GET || Hospital List
router.get(
  '/hospital-list',
  authmiddelware,
  adminmiddelware,
  getHospitalListController
);

//GET || ORG List
router.get('/org-list', authmiddelware, adminmiddelware, getOrgListController);

//DELETE DONAR || GET
router.delete(
  '/delete-donar/:id',
  authmiddelware,
  adminmiddelware,
  deleteDonarController
);

//export
module.exports = router;
