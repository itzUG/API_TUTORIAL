const asyncHandler = require('express-async-handler');
const { Employee, Address } = require('../models/employeeModels');

// // Get all employee details
// const getEmployeeDetails = asyncHandler(async (req, res) => {
//   const employeesData = await Employee.find().populate('addressId');
//   res.status(200).json(employeesData);
// });

// Get all employee details
// Get all employee details


const getEmployeeDetails = asyncHandler(async (req, res) => {
  const employeesData = await Employee.find().populate('addressId'); // Populate the entire address document

  const responseData = employeesData.map(employee => {
    return {
      [`${employee.firstName}'s Data`]: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        phone: employee.phone,
        addressId: employee.addressId,
        _id: employee._id,
        __v: employee.__v,
      },
      [`${employee.firstName}'s Address`]: {
        street: employee.addressId.street,
        city: employee.addressId.city,
        state: employee.addressId.state,
        zip: employee.addressId.zip,
        _id: employee.addressId._id,
        __v: employee.addressId.__v,
      },
    };
  });

  res.status(200).json(responseData);
});





const createEmployeeDetails = asyncHandler(async (req, res) => {
  const newEmployeeData = req.body;
  const newAddressData = req.body.address;

  const newAddress = new Address(newAddressData);
  await newAddress.save();

  newEmployeeData.addressId = newAddress._id;
  const newEmployee = new Employee(newEmployeeData);
  await newEmployee.save();

  const response = {
    [`${newEmployee.firstName}'s Data`]: newEmployee,
    [`${newEmployee.firstName}'s Address`]: newAddress,
  };

  res.status(201).json(response);
});






// Get employee by ID
const getEmployeeByID = asyncHandler(async (req, res) => {
  const employeeId = req.params.id;
  const employee = await Employee.findById(employeeId).populate('addressId');

  if (!employee) {
    res.status(404).json({ error: 'Employee not found' });
    return;
  }

  res.status(200).json(employee);
});





// Update employee by ID
const updateContacts = asyncHandler(async (req, res) => {
    const employeeId = req.params.id;
    const employee = await Employee.findById(employeeId).populate('addressId');
  
    if (!employee) {
      res.status(404).json({ error: 'Employee not found' });
      return;
    }
  
    // Update employee fields based on req.body
    const updatedEmployeeData = req.body;
    employee.firstName = updatedEmployeeData.firstName;
    employee.lastName = updatedEmployeeData.lastName;
    employee.email = updatedEmployeeData.email;
    employee.phone = updatedEmployeeData.phone;
  
    await employee.save();
  
    res.status(200).json(employee);
  });
  





// Delete employee by ID
const deleteeContacts = asyncHandler(async (req, res) => {
    const employeeId = req.params.id;
  
    const employee = await Employee.findById(employeeId);
  
    if (!employee) {
      res.status(404).json({ error: 'Employee not found' });
      return;
    }
  
    // Delete associated address
    await Address.findByIdAndDelete(employee.addressId);
  
    // Delete employee
    await Employee.findByIdAndDelete(employeeId);
  
    res.status(200).json({ message: 'Employee deleted successfully' });
  });
  


  const patchEmployee = asyncHandler(async (req, res) => {
    const employeeId = req.params.id;
  
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        employeeId,
        { $set: req.body }, // Use $set to update specific fields
        { new: true } // This option returns the updated document
      ).populate({
        path: 'addressId',
        select: 'street city state zip', // Include all address fields
      });
  
      if (!updatedEmployee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
      }
  
      res.status(200).json(updatedEmployee);
    } catch (error) {
      res.status(500).json({ error: 'Error updating employee' });
    }
  });
  

  module.exports = {
    getEmployeeDetails,
    deleteeContacts,
    createEmployeeDetails,
    getEmployeeByID,
    updateContacts,
    patchEmployee // Add the new route here
  };
