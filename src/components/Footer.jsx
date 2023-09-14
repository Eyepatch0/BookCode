import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-evenly" border={1}>
        <Grid
          item
          xs={12}
          md={8}
          display="flex"
          justifyContent="space-between"
          padding={2}
        >
          <Box>
            <Typography variant="h6" textAlign="center">
              Bookcode ©{new Date().getFullYear()}
            </Typography>
            <Typography variant="caption" textAlign="center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              quos amet provident voluptates,
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
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
