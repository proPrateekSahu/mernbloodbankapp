const express = require('express');
const authmiddelware = require('../middlewares/authmiddelware');
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganistionController,
  getOrganistionForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require('../controllers/inventoryController');

const router = express.Router();

//routes
//ADD INVENTOTY || POST
router.post('/create-inventory', authmiddelware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get('/get-inventory', authmiddelware, getInventoryController);

//GET HOSPITAL BLOOD RECORDS
router.post(
  '/get-inventory-hospital',
  authmiddelware,
  getInventoryHospitalController
);

//GET ALL BLOOD RECORDS
router.get('/get-donars', authmiddelware, getDonarsController);

//GET RECENT BLOOD RECORDS
router.get(
  '/get-recent-inventory',
  authmiddelware,
  getRecentInventoryController
);

//  GET ALL HOSPITALS RECORD
router.get('/get-hospitals', authmiddelware, getHospitalController);

//GET ORGANISATION RECORDS
router.get('/get-organisation', authmiddelware, getOrganistionController);

//GET organisation RECORDS
router.get(
  '/get-organisation-for-hospital',
  authmiddelware,
  getOrganistionForHospitalController
);

module.exports = router;
