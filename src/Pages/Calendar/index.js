import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate, "startdats");

    return (
      <DatePicker
      selected={startDate}
      showYearDropdown
      onChange={date => setStartDate(date)} />
    );
  };

export default Calendar;