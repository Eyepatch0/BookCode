import { Container, Grid, IconButton, Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-evenly">
        <Grid
          item
          xs={12}
          md={6}
          border={1}
          display="flex"
          justifyContent="space-between"
          padding={2}
        >
          <Typography variant="h6" textAlign="center">
            Bookcode ©{new Date().getFullYear()}
          </Typography>
          <Button variant="outlined" color="info">
            <Typography variant="body1">Contact Us!</Typography>
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          border={1}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <IconButton href="#" color="inherit">
            <FacebookIcon />
          </IconButton>

          <IconButton href="#" color="inherit">
            <TwitterIcon />
          </IconButton>

          <IconButton href="#" color="inherit">
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
