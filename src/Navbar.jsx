import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {Login, AppRegistration, Newspaper, Person, ContactPage} from '@mui/icons-material';

import ThemePicker from './ThemePicker';

function Navbar(props){
  return (
      <AppBar>
        <Toolbar>
          <Typography 
            variant="h6"
            onClick={() => props.changePage("default")}
          >
            {props.phrases.websiteName(props)}
          </Typography>
          <ButtonGroup variant="outline" color="primary">
            <Button
              startIcon={<Newspaper />}
              onClick={() => props.changePage("articles")}
            >
              {props.phrases.navArticle(props)}
            </Button>
            <Button
              startIcon={<Person />}
              onClick={() => props.changePage("aboutme")}
            >
              {props.phrases.navAboutMe(props)}
            </Button>
            <Button
              startIcon={<ContactPage />}
              onClick={() => props.changePage("contactme")}
            >
              {props.phrases.navContactMe(props)}
            </Button>
          </ButtonGroup>
          <ButtonGroup 
            variant="contained" 
            size="large"
            style={{"display": "block", "right": "10px", "position": "absolute"}}
          >
            <Button
              startIcon={<AppRegistration />}
              color="primary"
              onClick={() => props.changePage("signup")}
            > 
              {props.phrases.navSignUp(props)}
            </Button>
            <Button
              startIcon={<Login />}
              color="secondary"
              onClick={() => props.changePage("login")}
            > 
              {props.phrases.navLogIn(props)}
            </Button>
          </ButtonGroup>
          <ThemePicker 
            theme={props.theme}
            themes={props.themes}
            themeUID={props.themeUID}
            changeTheme={props.changeTheme}
          />
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;