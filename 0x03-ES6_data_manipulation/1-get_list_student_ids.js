// 1-get_list_student_ids.js

function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.map(student => student.id);
}

export default getListStudentIds;
