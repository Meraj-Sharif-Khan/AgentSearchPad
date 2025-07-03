import { Box } from "@mui/material";
import BrandHeader from "../../components/common/BrandHeader/BrandHeader";
import Header from "../../components/common/Header/Header";
import CategoryTab from "../../components/CategoryTab";
import SearchTypeTabs from "../../components/FlightSearch/SearchTypeTabs/SearchTypeTabs";

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
          paddingTop: { xs: "120px", sm: "80px", md: "57px" },
        }}
      >
        <CategoryTab />
        {/* <SearchTypeTabs /> */}
      </Box>
    </div>
  );
};

export default Home;
