import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  TextField,
  Paper,
  ListItem,
  ListItemText,
  CircularProgress,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const SearchSuggestions = ({
  options = [],
  loading = false,
  onSearch,
  placeholder = "Search...",
  noOptionsText = "No options available",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [validSelection, setValidSelection] = useState(false);

  const getOptionLabel = (option) => {
    if (typeof option === "string") return option;
    return `${option.city}, ${option.country}`;
  };

  useEffect(() => {
    const isValid =
      value &&
      options.some(
        (opt) => opt.city === value.city && opt.country === value.country
      );
    setValidSelection(isValid);
  }, [value, options]);

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    if (validSelection && value) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setValue(null);
    setValidSelection(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && validSelection) {
      handleSubmit();
    }
  };

  return (
    <Autocomplete
      freeSolo
      disableClearable
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      value={value}
      onChange={handleChange}
      options={options}
      loading={loading}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={(option, value) =>
        option.city === value.city && option.country === value.country
      }
      noOptionsText={noOptionsText}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={validSelection ? "primary" : "disabled"} />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  inputValue && (
                    <IconButton onClick={handleClear} size="small">
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  )
                )}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <ListItem
          {...props}
          key={option.code}
          sx={{ py: 1.5 }}
          onClick={() => {
            setValue(option);
            setOpen(false);
            onSearch(option);
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">
              {option.city}, {option.country}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {option.airportName}
            </Typography>
          </Box>
          <Typography variant="body1" color="primary">
            {option.code}
          </Typography>
        </ListItem>
      )}
      PaperComponent={({ children }) => (
        <Paper elevation={3} style={{ marginTop: 8 }}>
          {children}
        </Paper>
      )}
    />
  );
};

export default SearchSuggestions;
