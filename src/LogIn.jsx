import React, {useState} from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import mocked_accounts from './mocked_accounts';

function change(setter, {target: {value}}){
  setter(value);
}

function get_matching_account(email, password){
  return mocked_accounts.filter((user) => user.email === email && user.password === password)[0];
}

function handleSubmit(e, email, password, callback){
  e.preventDefault();
  const matching_account = get_matching_account(email, password);
  callback(matching_account);
}

function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <Container>
        <form onSubmit={(e) => handleSubmit(e, email, password, props.setUser)}>
          <Typography 
            variant="h2"
            component="h2"
            style={{
              textAlign: "center",
            }}
          > 
            Log In 
          </Typography>
          <TextField
            helperText="Please enter your email here"
            placeholder="john.doe@somemail.com"
            id="email"
            label="email"
            value={email}
            onChange={(e) => change(setEmail, e)}
            fullWidth
            style={{
              marginBottom: "1vh"
            }}
          />
          <TextField
            helperText="Please enter your password here"
            id="password"
            label="password"
            type="password"
            value={password}
            onChange={(e) => change(setPassword, e)}
            fullWidth
          />
          <Divider />
          <Button 
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
          > 
            Send 
          </Button>
        </form>
      </Container>
  );
}

export default LogIn;