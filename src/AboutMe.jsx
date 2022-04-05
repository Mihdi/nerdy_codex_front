import * as React from 'react';

import Avatar from '@mui/material/Avatar';
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

          <Grid item xs={12} lg={8}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus ante, tempus eget lorem id, scelerisque rutrum magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam porttitor lacus ut tortor lacinia, a porttitor nisl consectetur. Donec mollis vitae nisl ut volutpat. Duis ex diam, ullamcorper non maximus ac, iaculis nec dolor. Vivamus suscipit ut sapien nec finibus. Mauris ultricies libero justo, eget iaculis diam congue non. Quisque vehicula nibh sit amet risus scelerisque efficitur. Fusce vitae ante ac ex interdum dapibus non eu enim. Nam aliquet lacus a magna mollis, et placerat sem tincidunt. Nam ultrices pharetra metus non sodales. Suspendisse vitae nunc nisl. Praesent id massa aliquam, venenatis arcu sed, rhoncus erat. Etiam at lobortis erat, iaculis sagittis ligula. Proin elementum nisl metus, congue maximus enim rhoncus eu. Duis a libero ut libero posuere malesuada ac a turpis.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Avatar alt="Mehdi OUESLATI" src="lena.png" sx={{ width: 200, height: 200 }} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default AboutMe;