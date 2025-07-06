import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Popover,
  Button,
  Stack,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ReturnatePicker = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [date, setDate] = useState();
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  console.log(date);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "compact-date-picker" : undefined;

  const formatDate = (date) => {
    if (!date) return null;
    try {
      return {
        month: date.toLocaleString("default", { month: "long" }),
        day: date.getDate(),
        weekday: date.toLocaleString("default", { weekday: "long" }),
      };
    } catch (error) {
      console.error("Date formatting error:", error);
      return {
        month: "",
        day: "",
        weekday: "",
      };
    }
  };

  const formattedDate = formatDate(date);

  const handleDateChange = (newValue) => {
    if (!newValue) return;

    const selectedDate = new Date(newValue);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate >= currentDate) {
      setDate(newValue);
      handleClose();
    }
  };

  const isDateDisabled = (date) => {
    try {
      const dayDate = new Date(date);
      dayDate.setHours(0, 0, 0, 0);
      return dayDate < currentDate;
    } catch (error) {
      console.error("Date validation error:", error);
      return true;
    }
  };

  // Safe day of week formatter
  const formatDayOfWeek = (day) => {
    try {
      if (typeof day === "string") {
        return day.charAt(0);
      }
      if (day instanceof Date) {
        return day.toLocaleString("default", { weekday: "short" }).charAt(0);
      }
      return "";
    } catch (error) {
      console.error("Day formatting error:", error);
      return "";
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ height: "100%" }}>
        {/* Compact Date Display */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            minWidth: 80,
            height: "100%",
            position: "relative",
            p: "15.15px",
          }}
          onClick={handleClick}
        >
          {date ? (
            <>
              <Box
                sx={{ position: "absolute", top: "11.11px", left: "14.54px" }}
              >
                <CalendarMonthIcon />
              </Box>
              <Typography
                fontSize={"14px"}
                lineHeight={"100%"}
                variant="subtitle1"
                fontWeight="bold"
              >
                {formattedDate?.month}
              </Typography>
              <Typography
                fontSize={"45px"}
                variant="h5"
                lineHeight={"100%"}
                fontWeight="bold"
              >
                {formattedDate?.day}
              </Typography>
              <Typography
                fontSize={"14px"}
                variant="body2"
                color="text.secondary"
                lineHeight={"100%"}
              >
                {formattedDate?.weekday}
              </Typography>
            </>
          ) : (
            <>
              <Box
                sx={{ position: "absolute", top: "11.11px", left: "14.54px" }}
              >
                <CalendarMonthIcon />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="text.secondary"
                  marginTop={"6px"}
                >
                  Click to Return Flight
                </Typography>
              </Box>
            </>
          )}
        </Box>

        {/* Date Picker Popover */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            sx: {
              borderRadius: 2,
              boxShadow: 3,
              p: 2,
              minWidth: 300,
            },
          }}
        >
          <DatePicker
            value={date}
            onChange={handleDateChange}
            renderInput={({ inputRef }) => (
              <Box ref={inputRef} sx={{ display: "none" }} />
            )}
            minDate={currentDate}
            shouldDisableDate={isDateDisabled}
            components={{
              LeftArrowButton: ({ onClick }) => (
                <IconButton onClick={onClick}>
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
              ),
              RightArrowButton: ({ onClick }) => (
                <IconButton onClick={onClick}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              ),
            }}
            showDaysOutsideCurrentMonth
            dayOfWeekFormatter={formatDayOfWeek}
          />

          <Stack direction="row" spacing={1} mt={2}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                setDate(new Date());
                handleClose();
              }}
            >
              Today
            </Button>
            <Button variant="outlined" fullWidth onClick={handleClose}>
              Close
            </Button>
          </Stack>
        </Popover>
      </Box>
    </LocalizationProvider>
  );
};

export default ReturnatePicker;
