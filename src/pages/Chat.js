import React,{useEffect,useState} from 'react';
import { logout } from "../helpers/auth";
import { auth, database } from "../services/firebase";
import { getChats, sendChat } from "../helpers/database";
import Divider from '@material-ui/core/Divider';
import * as dateFns from "date-fns";

const Chat = () => {
    
const [msg, setMsg] = useState("");
const [chats, setChats] = useState([]);
  
const handleOnChange = (e) => {
	setMsg(e.target.value);
  };

const handleSumbit = async (e) => {
  e.preventDefault();
  try{
    await sendChat({
      message: msg,
      timestamp: Date.now(),
      uid: auth().currentUser.uid,
      name: auth().currentUser.displayName === null ? auth().currentUser.email : auth().currentUser.displayName
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
                      <p>{data.name}</p>
                        <p>
                          {data.message}
                        </p>
                    <span>{dateFns.format(data.timestamp, "yyyy-MM-dd-HH-mm-ss")}</span>
                    <Divider style={{ width:'100%',border: '1px solid #000' }} />
                  </li>
                ))
              ) : (
                <li>리스트가없습니다.</li>
              )}

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