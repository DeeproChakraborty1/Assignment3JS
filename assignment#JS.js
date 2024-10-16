function employeesInDepartment(employees, department) {
    return employees.filter(employee => employee.department === department).map(employee => employee.name);
  }
  
  // Example usage:
  const employees = [
    { name: "Alice", department: "HR" },
    { name: "Bob", department: "Engineering" },
    { name: "Charlie", department: "Sales" },
    { name: "David", department: "Engineering" }
  ];
  
  const engineeringEmployees = employeesInDepartment(employees, "Engineering");
  console.log(engineeringEmployees);