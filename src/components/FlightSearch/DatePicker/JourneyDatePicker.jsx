import React, { useEffect, useState } from "react";
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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChevronRight } from "@mui/icons-material";
import { useSearchContext } from "../../../contexts/SearchContext";
const JourneyDatePicker = ({ flightSearchCard }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const [date, setDate] = useState(currentDate);
  const { searchData, setSearchData } = useSearchContext();

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
    // if (!newValue) return;

    const selectedDate = new Date(newValue);
    selectedDate.setHours(0, 0, 0, 0);

    const year = newValue.getFullYear();
    const month = String(newValue.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(newValue.getDate()).padStart(2, "0");
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
      <Box sx={{ height: "100%", width: "100%" }}>
        {/* Compact Date Display */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: `${flightSearchCard ? "" : "center"}`,
            justifyContent: "space-between",
            cursor: "pointer",
            minWidth: 80,
            height: "100%",
            position: "relative",
            p: `${!flightSearchCard ? "15.15px" : ""}`,
          }}
          onClick={handleClick}
        >
          {flightSearchCard && (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                sx={{
                  display: { lg: "flex", xs: "none" },
                  flexWrap: "nowrap",
                  alignItems: "center",
                  cursor: "pointer",
                  py: "16.41px",
                  px: "25px",
                }}
              >
                <Box sx={{ pr: "18.7px", fontSize: 30, color: "#fff" }}>
                  <CalendarMonthIcon />
                </Box>
                <Typography
                  fontSize={{ xs: "12.36px", sm: "16px" }}
                  fontWeight={500}
                  color="#fff"
                  whiteSpace={"nowrap"}
                >
                  {`${formattedDate?.weekday}, ${formattedDate?.day} ${formattedDate?.month}`}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", pr: "21.4px" }}>
                <ChevronLeftIcon sx={{ color: "#fff" }} />
                <ChevronRight sx={{ color: "#fff" }} />
              </Box>
            </Box>
          )}
          {date && !flightSearchCard ? (
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
            !flightSearchCard && (
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
                    Click to Journey Date
                  </Typography>
                </Box>
              </>
            )
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

          {/* <Stack direction="row" spacing={1} mt={2}>
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
          </Stack> */}
        </Popover>
      </Box>
    </LocalizationProvider>
  );
};

export default JourneyDatePicker;
