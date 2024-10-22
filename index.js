// Write your solution in this file!
// employees.js

// Initialize the employee object
let employee = {
  name: 'Alice',
  streetAddress: '123 Main St'
};

// Non-destructive function to update an employee
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// Destructive function to update an employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Non-destructive function to delete a key from an employee
function deleteFromEmployeeByKey(employee, key) {
  const { [key]: deletedKey, ...newEmployee } = employee;
  return newEmployee;
}

// Destructive function to delete a key from an employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Export the functions if needed for testing
module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
};
