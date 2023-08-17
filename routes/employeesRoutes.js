const express = require("express")
const router = express.Router();

const {getEmployeeDetails , deleteeContacts , createEmployeeDetails,getEmployeeByID,updateContacts,patchEmployee}  = require("../controllers/employeecontroller");


router.route('/').get(getEmployeeDetails).post(createEmployeeDetails);

router.route('/:id').get(getEmployeeByID).put(updateContacts).delete(deleteeContacts).patch(patchEmployee);


module.exports = router;