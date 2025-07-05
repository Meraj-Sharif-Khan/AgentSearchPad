import React, { useEffect, useState } from "react";
import CompactDatePicker from "./CompactDatePicker";
import { Typography } from "@mui/material";

function DatePicker({ tab, type }) {
  return <CompactDatePicker tab={tab} type={type} />;
}

export default DatePicker;
