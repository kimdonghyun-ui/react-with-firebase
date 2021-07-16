import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { database } from "../services/firebase";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import { setRead, setRoom } from "../helpers/database";
import { connect } from 'react-redux';
import { setdata,setroomredux,setusers, setme } from '../modules/chats';
import { auth } from "../services/firebase";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));





const Friend = ({ setdata,setroomredux, setusers,userdata, setme, roomnumber }) => {
    const classes = useStyles();
    // const [users, setUsers] = useState([]);
    

const DataRead = () => {
  database.ref("users").on("value", (snapshot) => {
      let response = snapshot.val();
      console.log(response)
      if (response !== null) {
          setusers(Object.values(response));
      }
    // if (response !== null) {
    //   Object.keys(response).filter((key) => response[key]['key'] = key);
    //   setChats(Object.values(response));
    // }
    //console.log(response);
    // scrollToBottom();
  });
};

    
    const fond = (a) => {
        //console.log(a)
        //console.log(auth().currentUser.uid)

        const dfs = a.filter((data) => !data.uid.indexOf(auth().currentUser.uid));
        console.log(dfs[0].name)
        setme(dfs[0])
    }
    
    //const ee = (userdata.length > 0 && fond(userdata));
    //if (userdata.length) return ( ee )
   
console.log('userdata',userdata)

  useEffect(() => {
    DataRead()

      //return () => database().ref('chats').off('value', response);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

    useEffect(() => {

    userdata.length > 0 && fond(userdata)
      //return () => database().ref('chats').off('value', response);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userdata]);
    
    const handleOnChat = (you) => {
        setRoom(you,setroomredux)
        // setroomredux(`${me}+${you}`);
	    setRead(you, setdata);
  };
    
    return (
        <List className={classes.root}>
            {userdata.length > 0 ? (
              userdata.map((data, index) => (
                  <ListItem key={index} button onClick={() => handleOnChat(data.uid)} style={{ border: data.uid === roomnumber ? '1px solid #000' : '0' }}>
                    <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    </ListItemAvatar>
                      <ListItemText primary={data.name} secondary={data.email} />
                </ListItem>  
              ))
            ) : (
                <li>리스트가없습니다.</li>
            )}
        </List>
    );
};

const mapStateToProps = (state) => ({
    userdata: state.chats.userdata,
    roomnumber: state.chats.roomnumber
});

const mapDispatchToProps = (dispatch) => ({
    setdata: (val) => {
        dispatch(setdata(val));
    },
    setroomredux: (val) => {
        dispatch(setroomredux(val));
    },
    setusers: (val) => {
        dispatch(setusers(val));
    },
  setme: (val) => {
    dispatch(setme(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Friend);