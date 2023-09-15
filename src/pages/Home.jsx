// mui
import { Box, Stack } from "@mui/material";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavSearchBar from "../components/NavSearchBar";

const Home = () => {
  return (
    <Box container="true" height="100vh">
      <Stack direction="column" justifyContent="space-between" height="100vh">
        <Box>
          <Navbar />
          <NavSearchBar />
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
};

export default Home;
