import React, { useEffect, useState } from 'react';
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
import { setdata,setroomredux } from '../modules/chats';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));





const Friend = ({ setdata,setroomredux }) => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    

const DataRead = () => {
  database.ref("users").on("value", (snapshot) => {
      let response = snapshot.val();
      console.log(response)
      if (response !== null) {
          setUsers(Object.values(response));
      }
    // if (response !== null) {
    //   Object.keys(response).filter((key) => response[key]['key'] = key);
    //   setChats(Object.values(response));
    // }
    //console.log(response);
    // scrollToBottom();
  });
};

  useEffect(() => {
    DataRead()
    
      //return () => database().ref('chats').off('value', response);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const handleOnChat = (you) => {
        setRoom(you,setroomredux)
        // setroomredux(`${me}+${you}`);
	    setRead(you, setdata);
  };
    
    return (
        <List className={classes.root}>
            {users.length > 0 ? (
              users.map((data, index) => (
                <ListItem key={index} button onClick={()=>handleOnChat(data.uid)}>
                    <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={ data.name } secondary={ data.email } />
                </ListItem>  
              ))
            ) : (
                <li>리스트가없습니다.</li>
            )}
        </List>
    );
};



const mapDispatchToProps = (dispatch) => ({
  setdata: (val) => {
    dispatch(setdata(val));
    },
  setroomredux: (val) => {
    dispatch(setroomredux(val));
  },
});

export default connect(null, mapDispatchToProps)(Friend);