// main.ts

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any other attribute
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

// Log the instances to the console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
