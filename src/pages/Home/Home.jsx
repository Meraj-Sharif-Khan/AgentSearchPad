import { Box } from "@mui/material";
import BrandHeader from "../../components/common/BrandHeader/BrandHeader";
import Header from "../../components/common/Header/Header";
import BasicTabs from "../../components/BasicTabs";

const Home = () => {
  return (
    <div>
      <Box sx={{ display: { md: "none" } }}>
        <BrandHeader />
      </Box>
      <Header />
      <Box
        className="container"
        sx={{
          paddingTop: { xs: "80px", sm: "80px", md: "57px" },
        }}
      >
        <BasicTabs />
      </Box>
    </div>
  );
};

export default Home;
