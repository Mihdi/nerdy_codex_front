import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Login, AppRegistration} from '@mui/icons-material';
import Icon from './Icon';

function Navbar(){
  return (
      <AppBar>
        <Toolbar>
          <IconButton>
            <Icon/>
          </IconButton>
          <Typography variant="h6">
            The Nerdy Codex
          </Typography>
          <ButtonGroup variant="outline" color="primary">
            <Button
              startIcon={<AppRegistration />}
            >
              The Articles
            </Button>
            <Button
              startIcon={<AppRegistration />}
            >
              About Me
            </Button>
            <Button
              startIcon={<AppRegistration />}
            >
              Contact Me
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
              Sign Up
            </Button>
            <Button
              startIcon={<Login />}
              color="secondary"
            > 
              Log In
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;