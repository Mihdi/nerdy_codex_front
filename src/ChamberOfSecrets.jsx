import React, {useState} from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { SportsHandball } from '@mui/icons-material';


function change(setter, {target: {value}}){
  setter(value);
}

function handleSubmit(e, password, callback){
  e.preventDefault();

  console.log("checking that it works!")
  console.log(`Got ${password}`);
  callback(password);
}

function ChamberOfSecrets(props) {
  const [password, setPassword] = useState("");

  return (
      <Container>
        <form onSubmit={(e) => handleSubmit(e, password, (email, password) => {})}>
          <Typography
            variant="h2"
            component="h2"
            style={{
              textAlign: "center",
            }}
          >
            The Chamber of Secrets 
          </Typography>
          <TextField
            helperText="Throw a secret in the well..."
            id="password"
            label="secret"
            type="password"
            value={password}
            onChange={(e) => change(setPassword, e)}
            fullWidth
            style={{
              marginBottom: "2vh"
            }}
          />
          <Divider />
          <Button 
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<SportsHandball/>}
            fullWidth
          > 
            Throw 
          </Button>
        </form>
      </Container>
  );
}

export default ChamberOfSecrets;