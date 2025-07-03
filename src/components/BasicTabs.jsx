import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Flight from "./FlightSearch/Flight";
import Air from "../assets/icons/Air";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          sx={{
            minHeight: 5, // Override container height
            "& .MuiTab-root": {
              minHeight: 5, // Individual tab height
            },
          }}
          textColor="none"
          indicatorColor="none"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="icon scrollable auto tabs example"
        >
          <Tab
            sx={{
              height: "42.13px",
              color: "#fff",
              backgroundColor: value === 0 ? "#420C00" : "#E34825",
              borderRadius: "4.85px",
              "&:hover": { backgroundColor: "#420C00" },
              marginRight: "1.94px",
            }}
            iconPosition="start"
            icon={<Air />}
            label="Air Ticket"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#fff",
              backgroundColor: value === 1 ? "#420C00" : "#E34825",
              borderRadius: "4.85px",
              "&:hover": { backgroundColor: "#420C00" },
              marginRight: "1.94px",
            }}
            label="Hotel"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "#fff",
              backgroundColor: value === 2 ? "#420C00" : "#E34825",
              borderRadius: "4.85px",
              "&:hover": { backgroundColor: "#420C00" },
              marginRight: "1.94px",
            }}
            label="Holidays"
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              color: "#fff",
              backgroundColor: value === 3 ? "#420C00" : "#E34825",
              borderRadius: "4.85px",
              "&:hover": { backgroundColor: "#420C00" },
              marginRight: "1.94px",
            }}
            label="PNR Share"
            {...a11yProps(3)}
          />
          <Tab
            sx={{
              color: "#fff",
              backgroundColor: value === 4 ? "#420C00" : "#E34825",
              borderRadius: "4.85px",
              "&:hover": { backgroundColor: "#420C00" },
              marginRight: "1.94px",
            }}
            label="Group Fare"
            {...a11yProps(4)}
          />
          <Tab
            sx={{
              color: "#fff",
              backgroundColor: value === 5 ? "#420C00" : "#E34825",
              borderRadius: "4.85px",
              "&:hover": { backgroundColor: "#420C00" },
              marginRight: "20px",
            }}
            label="Visa"
            {...a11yProps(5)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Flight />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Hotel
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Holidays
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        PNR Share
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Group Fare
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Visa
      </CustomTabPanel>
    </Box>
  );
}
