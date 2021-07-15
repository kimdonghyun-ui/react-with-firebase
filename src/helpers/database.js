import { database } from "../services/firebase";
// import { setdata } from '../modules/chats';

export function sendChat(data,room) {
  // console.log(data)
  return database.ref(room).push({
    message: data.message,
    timestamp: data.timestamp,
    uid: data.uid,
    name: data.name
  });
}

export const removeChats = (key) => {
  database.ref(`chats/${key}`).remove();
}


export function setRead(){
  // database.ref("chats").on("value", (snapshot) => {
  //   let response = snapshot.val();
  //   if (response !== null) {
  //     Object.keys(response).filter((key) => response[key]['key'] = key);
  //     setChats(Object.values(response));
  //   }
  //   //console.log(response);
  //   scrollToBottom();
  // });
};


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


// export function dataRead3(room) {
//   let hello = [];
//   database.ref(room).on("value", (snapshot) => {
//     let response = snapshot.val();
//     if (response !== null) {
//       Object.keys(response).filter((key) => response[key]['key'] = key);
//       // setChats(Object.values(response));
//       // setdata(Object.values(response));
//       // console.log('a', Object.values(response));
//       hello = Object.values(response);
//     }
//     console.log(hello);
    
//   });
//   return hello;
// };

