import { Box, Container } from "@mui/material";
import BrandHeader from "../../components/common/BrandHeader/BrandHeader";
import Header from "../../components/common/Header/Header";
import CategoryTab from "../../components/CategoryTab";
import { useSearchContext } from "../../contexts/SearchContext";
import { useEffect } from "react";

const Home = () => {
  const { searchData, setSearchData } = useSearchContext();
  console.log(searchData);

  const currentDate = new Date();

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDateForSearch = `${year}-${month}-${day}`;

    const updateDepartureDate = {
      ...searchData,
      segmentsList: [
        {
          ...searchData.segmentsList[0],
          departureDate: formattedDateForSearch,
        },
      ],
    };

    setSearchData(updateDepartureDate);
    localStorage.setItem("search", JSON.stringify(searchData));
  }, []);

  return (
    <div>
      <Container>
        <Box sx={{ display: { md: "none" } }}>
          <BrandHeader />
        </Box>
        <Header />
        <Box
          sx={{
            paddingTop: { xs: "120px", sm: "80px", md: "57px" },
          }}
        >
          <CategoryTab />
          {/* <SearchTypeTabs /> */}
        </Box>
      </Container>
    </div>
  );
};

export default Home;
