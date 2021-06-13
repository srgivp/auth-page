import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CustomCheckbox = props => {
  function handleChange() {
    if (props.checked === true) {
      props.setValue("remember", false);
      props.setChecked(false);
    } else {
      props.setValue("remember", true);
      props.setChecked(true);
    }
  }
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={props.checked}
          onChange={handleChange}
          name="remember"
        />
      }
      label="Remember me"
    />
  );
};

export default CustomCheckbox;
