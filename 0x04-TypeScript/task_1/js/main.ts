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

// Log the instances to the console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1); // Log the director instance
