// 4-update_grade_by_city.js

function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
