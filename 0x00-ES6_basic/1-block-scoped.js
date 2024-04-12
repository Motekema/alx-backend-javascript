export default function taskBlock(trueOrFalse) {
  let task = false; // Changed var to let
  let task2 = true; // Changed var to let

  if (trueOrFalse) {
    const task = true; // Changed var to const
    const task2 = false; // Changed var to const
  }

  return [task, task2];
}
