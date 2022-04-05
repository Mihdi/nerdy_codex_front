import React, {useState} from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


function change(setter, {target: {value}}){
  setter(value);
}

function handleSubmit(e, email, object, content, callback){
  e.preventDefault();

  console.log("checking that it works!")
  console.log(`email: ${email}`);
  console.log(`object: ${object}`);
  console.log(`content: ${content}`);
  callback(email, object, content);
}

function ContactMe(props) {
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [content, setContent] = useState("");

  return (
      <Container>
        <form onSubmit={(e) => handleSubmit(e, email, object, content, (email, object, content) => {})}>
          <Typography 
            variant="h2"
            component="h2"
            style={{
              textAlign: "center",
            }}
          > 
            Contact Me
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
          <Divider/>
          <TextField
            helperText="What is your message about?"
            id="text"
            label="object"
            value={object}
            onChange={(e) => change(setObject, e)}
            fullWidth
            style={{
              marginBottom: "1vh"
            }}
          />
          <TextField
            helperText="Please write your message here"
            id="text"
            label="content"
            value={content}
            onChange={(e) => change(setContent, e)}
            fullWidth
            multiline
            rows={4}
            style={{
              marginBottom: "1vh"
            }}
          />
          <Divider/>
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

export default ContactMe;