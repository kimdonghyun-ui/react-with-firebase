import React,{useEffect,useState} from 'react';



import * as dateFns from "date-fns";
import { auth } from "../services/firebase";
import { sendChat, removeChats, setRead } from "../helpers/database";
import { Container,Box,Grid,List,ListItem,ListItemText,ListItemAvatar,Avatar,Typography,Button  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// import Header from '../components/Header';

import marked from 'marked';
import DOMPurify from 'dompurify';

import Layout from '../components/Layout';



import { connect } from 'react-redux';
import { setdata } from '../modules/chats';




const linkRenderer = new marked.Renderer();

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


const Marked = (props) => (
  <>
    <span
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          marked.parse(props.desc, { renderer: linkRenderer }),
          {
            ALLOWED_TAGS: ['h1','h2','h3','h4','h5','strong','a'],
            ALLOWED_ATTR: ['href', 'target', 'title'],
          }
        ),
      }}
    />
  </>
);


const Chat = ({ setdata, chatdata, roomnumber }) => {
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
  const [chats, setChats] = useState(chatdata);
  
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
    },roomnumber);
    scrollToBottom();
  }catch(error){
    console.log(error);
  }
};  


  useEffect(() => {
    setRead(roomnumber, setdata);
  //return () => database().ref('chats').off('value', response);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <Layout>
    <Container maxWidth="sm" style={{paddingBottom: '60px'}}>
        {/* <Header /> */}
        <div className="chat-middle">
          <List className={classes.root}>
            {chatdata.length > 0 ? (
              chatdata.map((data, index) => (
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
                              {/* {data.message} */}
                              <Marked desc={data.message}></Marked>
                            </Typography>
                            <br />
                            {dateFns.format(data.timestamp, "yyyy-MM-dd-HH-mm-ss")}
                          </React.Fragment>
                        }
                    />
                    <Button onClick={()=>removeChats(roomnumber,data.key)}>삭제</Button>
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
      </Layout>
    );
};


const mapStateToProps = (state) => ({
  roomnumber: state.chats.roomnumber,
  chatdata: state.chats.chatdata,
});
const mapDispatchToProps = (dispatch) => ({
  setdata: (val) => {
    dispatch(setdata(val));
  },
  // remove: (val) => {
  //   dispatch(remove(val));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

