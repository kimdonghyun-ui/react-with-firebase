import { database } from "../services/firebase";


export function sendChat(data) {
  console.log(data)
  return database.ref("chats").push({
    message: data.message,
    timestamp: data.timestamp,
    uid: data.uid,
    name: data.name
  });
}

export function getChats() {
  let chats = [];
  database.ref("chats").on("value", (snapshot) => {
    snapshot.forEach((row) => {
      chats.push(row.val());
    });
  });
  return chats;
}