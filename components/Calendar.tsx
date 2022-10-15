import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@mui/material";
import theme from "../utils/theme";

type Props = {
  onCancel: () => void;
  onSearchConfirmation: (startDate: any, endDate: any) => void;
};

const Calendar: React.FC<Props> = ({ onCancel, onSearchConfirmation }) => {
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (range: any) => {
    setRange(range.selection);
  };

  return (
    <div className="grid grid-cols-1">
      <DateRangePicker
        ranges={[range]}
        onChange={handleChange}
        minDate={new Date()}
        rangeColors={[theme.palette.primary.main]}
      />
      <div className="flex justify-around">
        <Button color="primary" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            onSearchConfirmation(range.startDate, range.endDate);
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
