import React, { useState } from "react";
import PropTypes from "prop-types";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@mui/material";

const Calendar = () => {
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (ranges: any) => {
    console.log(ranges);
  };

  return (
    <div className="grid grid-cols-1">
      <DateRangePicker ranges={[range]} onChange={handleChange} className="" />
      <div className="flex justify-around">
        <Button>Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </div>
  );
};

Calendar.propTypes = {};

export default Calendar;
