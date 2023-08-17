const mongoose = require('mongoose');

// Employee schema
const employeeSchema = new mongoose.Schema({
  id: String,         // Unique identifier for the employee
  firstName: String, // First name of the employee
  lastName: String,  // Last name of the employee
  email: String,     // Email address of the employee
  phone: String,     // Phone number of the employee
  addressId: String, // ID of the associated address
});

// Address schema
const addressSchema = new mongoose.Schema({
  id: String,       // Unique identifier for the address
  street: String,   // Street address
  city: String,     // City
  state: String,    // State
  zip: String,      // ZIP code
});


// Create models
const Employee = mongoose.model('Employee', employeeSchema);
const Address = mongoose.model('Address', addressSchema);

  module.exports = {Employee,Address};
