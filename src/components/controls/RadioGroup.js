import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from "@material-ui/core";
import React from "react";

export default function RadioGroup(props) {
  const { name, label, value, onchange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onchange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio></Radio>}
            label={item.title}
          ></FormControlLabel>
        ))}

      </MuiRadioGroup>
    </FormControl>
  );
}
