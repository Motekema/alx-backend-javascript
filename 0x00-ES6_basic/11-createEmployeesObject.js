export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {};
  employeesObject[departmentName] = employees;
  return employeesObject;
}
