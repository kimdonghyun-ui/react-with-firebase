import React,{useEffect,useState} from 'react';
import { logout } from "../helpers/auth";
import * as dateFns from "date-fns";
import { auth, database } from "../services/firebase";
import { getChats, sendChat } from "../helpers/database";
import { Container,Box,Grid,List,ListItem,ListItemText,ListItemAvatar,Avatar,Typography,Button  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

/* icon */
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  lBox: {
    flexDirection: 'row-reverse',
    display: 'flex',
    textAlign: 'right'
  },
  rBox: {
    flexDirection: 'row-reverse',
    display: 'flex',
    textAlign: 'right'
  },
    appBar: {
      top: 'auto',
      bottom: 0,
      left: 0,
      width:'100%',
      '& input,& button': {
        width: '100%',
        height: '50px'
      }
  },
  inline: {
    wordBreak: 'break-all',
  }
}));

const Chat = () => {
  const classes = useStyles();

  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'auto'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 

const [msg, setMsg] = useState("");
const [chats, setChats] = useState([]);
  
const handleOnChange = (e) => {
	setMsg(e.target.value);
  };

const handleSumbit = async (e) => {
  e.preventDefault();
  setMsg('');
  try{
    await sendChat({
      message: msg,
      timestamp: Date.now(),
      uid: auth().currentUser.uid,
      name: auth().currentUser.displayName === null ? auth().currentUser.email : auth().currentUser.displayName
    });
    scrollToBottom();
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
    <Container maxWidth="sm" style={{paddingBottom: '60px'}}>
      
      
      <div className="chat-top">헤더</div>
        <button onClick={() => { logout()}}>로그아웃</button>
        <div className="chat-middle">
          <List className={classes.root}>
          {chats.length > 0 ? (
                chats.map((data, index) => (
                  <ListItem key={index} alignItems="flex-start" style={{ display: 'block' }}>
                    <Box style={{
                       display: 'flex',
                      flexDirection: auth().currentUser.uid === data.uid ? 'row' : 'row-reverse',
                          textAlign: auth().currentUser.uid === data.uid ? 'left' : 'right'
                    }}>
                      <ListItemAvatar style={{
                            display: 'flex',
                            justifyContent : auth().currentUser.uid !== data.uid ? 'flex-end' : 'flex-start',
                       }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                      <ListItemText
                        primary={data.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              {data.message}
                            </Typography>
                            <br />
                            {dateFns.format(data.timestamp, "yyyy-MM-dd-HH-mm-ss")}
                          </React.Fragment>
                        }
                      />
                    </Box>
                  </ListItem>                  
                ))
              ) : (
                <li>리스트가없습니다.</li>
              )}
            </List>
      </div>
      
      <Box position="fixed" color="primary" className={classes.appBar}>
        <Container maxWidth="sm">
          <form onSubmit={handleSumbit}>
            <Grid container spacing={1}>
              <Grid container item xs={10} spacing={0}>
                <input
                  placeholder="내용을 입력하세요."
                  value={msg}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid container item xs={2} spacing={0}>
                <Button variant="contained" color="primary" type="submit">전송</Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>

    </Container>
    );
};

export default Chat;