import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {Login, AppRegistration, Newspaper, Person, ContactPage, Key} from '@mui/icons-material';

import ThemePicker from './ThemePicker';

function Navbar(props){
  //maybe make it so if we're currently on a subpage, then that subpage appears in a special manner?
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
            <Button
              startIcon={<Key />}
              onClick={() => props.changePage("secret")}
            >
              {props.phrases.navSecret(props)}
            </Button>
          </ButtonGroup>
            <ButtonGroup 
            /*TODO: get rid of CSS and find a better, mobile-first way of realizing the same thing. Maybe grids?*/
              style={{"display": "block", "right": "15vw", "position": "absolute"}}
            >
              <ThemePicker 
                theme={props.theme}
                themes={props.themes}
                themeUID={props.themeUID}
                changeTheme={props.changeTheme}
              />
            </ButtonGroup>
            <ButtonGroup 
            variant="contained" 
            size="large"
            /*TODO: get rid of CSS and find a better, mobile-first way of realizing the same thing. Maybe grids?*/
            style={{"display": "block", "right": "1vw", "position": "absolute"}}
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
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;