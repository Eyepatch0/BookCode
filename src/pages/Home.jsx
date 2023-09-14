// mui
import { Box, Stack } from "@mui/material";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box container height="100vh">
      <Stack direction="column" justifyContent="space-between" height="100vh">
        <Navbar />
        <Footer />
      </Stack>
    </Box>
  );
};

export default Home;
