import React,{useEffect,useState} from 'react';
import { logout } from "../helpers/auth";
import { auth, database } from "../services/firebase";
import { getChats, sendChat } from "../helpers/database";

const Chat = () => {
    
const [msg, setMsg] = useState("");
const [chats, setChats] = useState([]);
  
const handleOnChange = (e) => {
	setMsg(e.target.value);
  };

const handleSumbit = async (e) => {
  e.preventDefault();
  console.log(msg);
  try{
    await sendChat({
      message: msg,
      timestamp: Date.now(),
      uid: auth().currentUser.uid,
    });
  }catch(error){
    console.log(error);
  }
};  

const getChatList = () => {
  const chatList = getChats();
  setChats(chatList);
};

  useEffect(() => {
    try {
      database.ref("chats").on("child_added", getChatList);
      database.ref("chats").on("child_changed", getChatList);
      //scrollToBottom();
    } catch (error) {
      console.log(error);
    }
  }, []);
  
    return (
      <div className="chat-container">
            <div className="chat-top">헤더</div>
        <div className="chat-middle">
          
  {chats.length > 0 ? (
        chats.map((data, index) => (
              <li className="chat-bubble send" key={index} style={{ display:'flex',flexDirection:'column',alignItems:auth().currentUser.uid === data.uid ? 'flex-start' : 'flex-end'  }}>
                <p>
                  {data.message}
                </p>
            <span>{data.timestamp}</span>
              </li>
        ))
      ) : (
        <li>리스트가없습니다.</li>
      )}
{/* 
              <li className="chat-bubble send">
                <p>
                  하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~
                  하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~
                  하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~
                </p>
                <span>13:30PM</span>
              </li>
              <li className="chat-bubble receive">
                <p>방가방가!!</p>
                <span>13:31PM</span>
              </li> */}
            </div>
            <div className="chat-bottom">
              <form onSubmit={handleSumbit}>
                <input
                  placeholder="내용을 입력하세요."
                  value={msg}
                  onChange={handleOnChange}
                />
                <button type="submit">전송</button>
              </form>
              </div>
            <button onClick={() => { logout()}}>로그아웃</button>
          </div>
    );
};

export default Chat;