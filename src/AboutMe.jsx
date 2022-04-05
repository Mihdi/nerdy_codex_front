import * as React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function AboutMe(props) {
  const onDownload = () => {
    window.open("./resume.pdf", "_blank");
    // const link = document.createElement("a");
    // link.download = "resume.pdf";
    // link.href = "./resume.pdf";
    // link.setAttribute('rel', 'external');
    // console.log("created link is", link);

    // link.click();
  };
  return (
    <Grid>
      <Grid item xs={12} lg={12}>
        <Typography
          variant="h2"
          component="h2"
          style={{
            textAlign: "center"
          }}
        >
          About Mehdi `Arcanite` OUESLATI
        </Typography>
      </Grid>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Button 
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={props.changePage}
            > 
              Contact Me 
            </Button>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Button 
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              onClick={onDownload}
              fullWidth
            > 
              Download my Resume
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default AboutMe;