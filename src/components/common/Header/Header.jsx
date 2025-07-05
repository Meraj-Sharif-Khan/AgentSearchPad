import { Box } from "@mui/material";
import MarqueeAlert from "../Alert/Alert";
import CheckBalanceButton from "../Button/CheckBalanceButton";
import Search from "../Input/Search";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        height: "48px",
        marginTop: "28px",
      }}
    >
      <Box
        sx={{
          marginRight: "5px",
          width: { md: "48px", xs: "160px" },
          transition: "all 0.5s ease",
          "&:hover": {
            width: { md: "194px" },
          },
        }}
      >
        <Search />
      </Box>
      <Box
        sx={{
          order: { md: 2 },
          backgroundColor: { md: "#fff" },
          borderRadius: "0px 3px 3px 0px",
          display: "flex",
          alignItems: "center",
          padding: { md: "12.87px" },
          height: "100%",
        }}
      >
        <CheckBalanceButton />
      </Box>
      <Box
        sx={{
          width: { sm: "100%" },
          order: { md: 1 },
          flex: { md: "1" },
          overflow: "hidden",
          paddingTop: { xs: "16px", sm: "16px", md: "0px" },
        }}
      >
        <MarqueeAlert>
          প্রিয় ট্রেড পার্টনার, আমাদের সাথে হোয়াটসঅ্যাপ এ যোগাযোগ করতে উপরে
          থাকা হোয়াটসঅ্যাপ বাটনটিতে ক্লিক করুন, অথবা +৮৮০ ১৭৫৫ ৫৭২ ০৯৮ এবং +৮৮০
          ১৭৫৫ ৫৭২
        </MarqueeAlert>
      </Box>
    </Box>
  );
};

export default Header;
