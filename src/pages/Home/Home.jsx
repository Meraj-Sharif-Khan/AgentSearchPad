import { Box } from "@mui/material";
import MarqueeAlert from "../../components/common/Alert/Alert";
import CheckBalanceButton from "../../components/common/Button/CheckBalanceButton";
import Header from "../../components/common/Header/Header";
import Search from "../../components/common/Input/Search";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <CheckBalanceButton />

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <MarqueeAlert>
          প্রিয় ট্রেড পার্টনার, আমাদের সাথে হোয়াটসঅ্যাপ এ যোগাযোগ করতে উপরে
          থাকা হোয়াটসঅ্যাপ বাটনটিতে ক্লিক করুন, অথবা +৮৮০ ১৭৫৫ ৫৭২ ০৯৮ এবং +৮৮০
          ১৭৫৫ ৫৭২
        </MarqueeAlert>
      </Box>
    </div>
  );
};

export default Home;
