# Employee Management API

Welcome to the Employee Management API! This API allows you to manage employee details, including their personal information and addresses.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [Endpoints](#endpoints)
- [CRUD Operations](#crud-operations)
  - [Get All Employee Details](#get-all-employee-details)
  - [Create Employee](#create-employee)
  - [Get Employee by ID](#get-employee-by-id)
  - [Update Employee](#update-employee)
  - [Delete Employee](#delete-employee)
  - [Update Employee Partially (PATCH)](#update-employee-partially-patch)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This API provides a comprehensive set of CRUD (Create, Read, Update, Delete) operations for managing employee details and their associated addresses. It is built using Express.js, MongoDB, and async/await for efficient and asynchronous handling of requests.

## Getting Started

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install dependencies:

```bash
npm install




##Running the Server
npm start


Endpoints
CRUD Operations
All CRUD operations are grouped under the /employees endpoint.

Get All Employee Details
URL: GET api/employees
Description: Fetches a list of all employees along with their associated addresses.
Response Example:

HTTP Status: 200 OK
Content-Type: application/json

[
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "addressId": "address_id_1",
    "_id": "employee_id_1",
    "__v": 0,
    "addressId": {
      "street": "123 Main St",
      "city": "Cityville",
      "state": "CA",
      "zip": "12345",
      "_id": "address_id_1",
      "__v": 0
    }
  },
  // ...
]




Create Employee
URL: POST api/employees
Description: Creates a new employee entry along with an associated address.
Request Body Example:

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "987-654-3210",
  "address": {
    "street": "456 Elm St",
    "city": "Townville",
    "state": "NY",
    "zip": "54321"
  }
}




Get Employee by ID
URL: GET api/employees/:id
Description: Retrieves detailed information about a specific employee by their ID.


Update Employee
URL: PUT api/employees/:id
Description: Updates the information of an existing employee.
Request Body Example: See the code provided in your previous message.


Delete Employee
URL: DELETE api/employees/:id
Description: Deletes an employee along with their associated address by their ID.



Update Employee Partially (PATCH)
URL: PATCH api/employees/:id
Description: Partially updates an employee's information.










