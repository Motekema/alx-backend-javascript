// 1-make_classrooms.js
import ClassRoom from "./0-classroom.js";

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = roomSizes.map(size => new ClassRoom(size));
  return rooms;
}

export default initializeRooms;
