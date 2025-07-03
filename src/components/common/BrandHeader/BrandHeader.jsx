import { Box } from "@mui/material";
import BrandIcon from "../../../assets/icons/brandIcon.svg";
const BrandHeader = () => {
  return (
    <div>
      <Box
        component="section"
        sx={{
          pt: "24px",
          pb: "32px",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={BrandIcon} alt="" />
      </Box>
    </div>
  );
};

export default BrandHeader;
