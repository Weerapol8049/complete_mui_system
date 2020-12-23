import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventParameter = (name, value) =>({
    target:{
        name, value
    }
})

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={date => onChange(convertToDefaultEventParameter(name, date))}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
}
