import { database } from "../services/firebase";


export function sendChat(data) {
  // console.log(data)
  return database.ref("chats").push({
    message: data.message,
    timestamp: data.timestamp,
    uid: data.uid,
    name: data.name
  });
}

export const removeChats = (key) => {
  database.ref(`chats/${key}`).remove();
}

// export function getChats() {
//   let chats = [];
//   database.ref("chats").on("value", (snapshot) => {
//     snapshot.forEach((row) => {
//       chats.push(row.val());
//     });
//   });
//   return chats;
// }

// export function getChats2() {
//   var chats = [];
//     database.ref("chats").on("value", (snapshot) => {
//       chats = Object.values(snapshot.val());
//     });
//   console.log(chats)
//   return chats;
// }


