import Button from "@mui/material/Button";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const BalanceButton = ({ logo, title }) => {
  return (
    <Button
      variant="contained"
      startIcon={<AccountBalanceWalletIcon />}
      sx={{
        width: "500px",
        height: "31.35px",
        bgcolor: "#E34825",
        "&:hover": { bgcolor: "#420C00" },
        textTransform: "none",
        borderRadius: "19px",
        padding: "12px 24px",
      }}
    >
      Check Balance
    </Button>
  );
};

export default BalanceButton;
