import React, { useEffect, useState } from "react";
import CompactDatePicker from "./CompactDatePicker";
import { Typography } from "@mui/material";

function DatePicker({ type }) {
  const [date, setDate] = useState(null);

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  useEffect(() => {
    if (type !== "return") {
      setDate(currentDate);
    }
  }, []);

  return <CompactDatePicker value={date} onChange={setDate} />;
}

export default DatePicker;
