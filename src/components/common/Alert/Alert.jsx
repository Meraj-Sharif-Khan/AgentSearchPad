import { Box, keyframes } from "@mui/material";
import { styled } from "@mui/system";
import alertIcon from "../../../assets/icons/alertIcon.svg";

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const MarqueeText = styled("div")({
  display: "inline-block",
  whiteSpace: "nowrap",
  animation: `${marquee} 20s linear infinite`,
});

const MarqueeAlert = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            width: "50px",
            display: "inline-block",
            zIndex: "2",
            py: "13px",
            px: "14px",
            "&:hover .marquee-text": {
              animationPlayState: "paused",
            },
          }}
        >
          <img src={alertIcon} alt="" />
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            flex: "1",
            py: "13px",
            px: "14px",
            display: "inline-block",
            "&:hover .marquee-text": {
              animationPlayState: "paused",
            },
          }}
        >
          <MarqueeText className="marquee-text">{children}</MarqueeText>
        </Box>
      </Box>
    </>
  );
};

export default MarqueeAlert;
