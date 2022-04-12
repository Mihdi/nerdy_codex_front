import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
          <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: {md: 'flex' }, m: 1 }}>
              <ThemePicker 
                theme={props.theme}
                themes={props.themes}
                themeUID={props.themeUID}
                changeTheme={props.changeTheme}
              />
            </Box>
            <Box sx={{ display: {md: 'flex' }, m: 0.5 }}>
              <ButtonGroup 
                variant="contained" 
                size="large"
              >
              {(!props.user) &&
                <React.Fragment>
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
                </React.Fragment>
              }
              {(props.user) &&
                <Button>
                  <Avatar alt={props.user.name} src="old_lena.png" />
                </Button>
              }
              </ButtonGroup>
            </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;