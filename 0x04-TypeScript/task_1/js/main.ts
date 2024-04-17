// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any other attribute
}

// Define the Directors interface extending the Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define an interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase(); // Get the first letter of the first name and convert it to uppercase
  const fullName = `${firstInitial}. ${lastName}`; // Combine the first initial and the full last name
  return fullName;
};

// Create instances of the Teacher interface
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Los Angeles',
  contract: false, // Custom attribute
};

const teacher3: Teacher = {
  firstName: 'Alice',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  location: 'London',
  contract: true, // Custom attribute
};

// Create an instance of the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

// Log the results of printTeacher function for the provided teachers
console.log(printTeacher(teacher1.firstName, teacher1.lastName));
console.log(printTeacher(teacher2.firstName, teacher2.lastName));
console.log(printTeacher(teacher3.firstName, teacher3.lastName));

// Log the result of printTeacher function for the director
console.log(printTeacher(director1.firstName, director1.lastName));
