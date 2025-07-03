import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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

export default function SearchTypeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              color: value === 0 ? "#fff" : "#202124",
              backgroundColor: value === 0 ? "#202124" : "",
              borderRadius: "4.85px",
              "&:hover": { backgroundColor: "#202124", color: "#fff" },
              marginRight: "1.94px",
              textTransform: "capitalize",
            }}
            label="One Way"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: value === 1 ? "#fff" : "#202124",
              backgroundColor: value === 1 ? "#202124" : "",
              borderRadius: "4.85px",
              "&:hover": { backgroundColor: "#202124", color: "#fff" },
              marginRight: "1.94px",
              textTransform: "capitalize",
            }}
            iconPosition="start"
            label="Round Way"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: value === 2 ? "#fff" : "#202124",
              backgroundColor: value === 2 ? "#202124" : "",
              borderRadius: "4.85px",
              "&:hover": { backgroundColor: "#202124", color: "#fff" },
              marginRight: "1.94px",
              textTransform: "capitalize",
            }}
            label="Multi City"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        One Way
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Round Way
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Multi City
      </CustomTabPanel>
    </Box>
  );
}
