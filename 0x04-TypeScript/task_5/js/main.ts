// main.ts

// Define interfaces MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  __brand: "MajorCredits"; // Brand property
}

interface MinorCredits {
  credits: number;
  __brand: "MinorCredits"; // Brand property
}

// Define function sumMajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: "MajorCredits" };
}

// Define function sumMinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: "MinorCredits" };
}
