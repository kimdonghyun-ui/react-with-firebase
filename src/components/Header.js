import React,{ useEffect, useState } from 'react';
import { logout } from "../helpers/auth";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import { auth } from "../services/firebase";

import { connect } from 'react-redux';



function HideOnScroll(props) {
  const { children, window  } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


const Header = (props) => {
  const { userdata , me } = props;
  const [result, setResult] = useState([]);

  // const Hello = (a) => {
    
  //   let gogo = a.filter(data => data.uid.includes(auth().currentUser.uid));
  //   console.log('gogo',gogo)
  //   setResult(gogo)
    
  // }

  useEffect(() => {
  // setResult(Object.keys(userdata).filter(data => data.uid.includes(auth().currentUser.uid)));
  console.log(me)
  }, []);


  return (
      <React.Fragment>
          <Container maxWidth="sm">
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                <Toolbar>
              <Typography variant="h6">{ me }님의 채팅방세상</Typography>
                            <button onClick={() => { logout()}}>로그아웃</button>
                </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
      
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  me: state.chats.me,
  userdata: state.chats.userdata,
});

export default connect(mapStateToProps, null)(Header);