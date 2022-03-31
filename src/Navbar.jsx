import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Login, AppRegistration, Newspaper, Person, ContactPage} from '@mui/icons-material';

function Navbar(props){
  return (
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            {props.phrases.websiteName}
          </Typography>
          <ButtonGroup variant="outline" color="primary">
            <Button
              startIcon={<Newspaper />}
            >
              {props.phrases.navArticle}
            </Button>
            <Button
              startIcon={<Person />}
            >
              {props.phrases.navAboutMe}
            </Button>
            <Button
              startIcon={<ContactPage />}
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
            > 
              {props.phrases.navSignUp}
            </Button>
            <Button
              startIcon={<Login />}
              color="secondary"
            > 
              {props.phrases.navLogIn}
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;