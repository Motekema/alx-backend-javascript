// Define DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Define Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Define Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Define createEmployee function
function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Define isDirector function
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Define executeWork function
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test createEmployee function
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director

// Test executeWork function
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
