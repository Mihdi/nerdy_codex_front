import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import {Login, AppRegistration, Newspaper, Person, ContactPage, ColorLens} from '@mui/icons-material';

import Icon from './Icon';

function Navbar(props){
  return (
      <AppBar>
        <Toolbar>
          <Typography 
            variant="h6"
            onClick={() => props.changePage("default")}
          >
            {props.phrases.websiteName}
          </Typography>
          <ButtonGroup variant="outline" color="primary">
            <Button
              startIcon={<Newspaper />}
              onClick={() => props.changePage("articles")}
            >
              {props.phrases.navArticle}
            </Button>
            <Button
              startIcon={<Person />}
              onClick={() => props.changePage("aboutme")}
            >
              {props.phrases.navAboutMe}
            </Button>
            <Button
              startIcon={<ContactPage />}
              onClick={() => props.changePage("contactme")}
            >
              {props.phrases.navContactMe}
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
              {props.phrases.navSignUp}
            </Button>
            <Button
              startIcon={<Login />}
              color="secondary"
              onClick={() => props.changePage("login")}
            > 
              {props.phrases.navLogIn}
            </Button>
          </ButtonGroup>
          <Select
            startIcon={<ColorLens />}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.theme}
            label="Theme"
            size="large"
            onChange={({target: {value}}) => props.changeTheme(value)}
          >
            <MenuItem value={"default"}>Default</MenuItem>
            <MenuItem value={"dark"}>Dark</MenuItem>
            <MenuItem value={"dork"}>Dork</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;