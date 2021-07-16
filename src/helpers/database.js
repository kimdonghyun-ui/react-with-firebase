import { database } from "../services/firebase";
// import { setdata } from '../modules/chats';

export function sendChat(data,room) {
  // console.log(data)
  return database.ref(`list/${room}`).push({
    message: data.message,
    timestamp: data.timestamp,
    uid: data.uid,
    name: data.name,
  });
}

export function signUp2(email, name, password, uid) {
  console.log("가입2", email, name, password);
  return database.ref("users").push({
    email: email,
    name: name,
    password: password,
    uid: uid,
  });
}

export const removeChats = (room,key) => {
  database.ref(`list/${room}/${key}`).remove();
};





export const setRead = (room, setRedux,setstate) => {
  let list = [];
  database.ref(`list/${room}`).on("value", (snapshot) => {
    let response = snapshot.val();
    if (response !== null) {
      Object.keys(response).filter((key) => response[key]['key'] = key);
      console.log('a', Object.values(response));
      list = Object.values(response);
    }
    setRedux(list);
    // setstate(list);
  });
};


export const setRoom = (you, setroomredux) => {
    database.ref('list/').on("value", (snapshot) => {
      let response = Object.keys(snapshot.val());
      console.log('체크1', response)

      setroomredux(you);
  });
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

