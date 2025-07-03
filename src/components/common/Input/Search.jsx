import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import { useWindowSize } from "../../../hooks/useWindowSize";

const Search = () => {
  //   const { width } = useWindowSize();
  //   const isMobile = width < 760;

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          maxWidth: "194px",
          height: { sm: "31px", md: "48px" },
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} />
        <IconButton type="button" sx={{ p: "4px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Search;
