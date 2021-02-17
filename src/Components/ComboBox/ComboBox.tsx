/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { IProvince } from "../../data";

interface IProps {
  provinces: IProvince[];
  selected: IProvince | null;
  setSelectedProvince: (value: IProvince) => void;
}

const ComboBox: React.FC<IProps> = (props) => {
  const handleChange = (e: React.ChangeEvent<{}>, value: IProvince | null) => {
    if (value) {
      props.setSelectedProvince(value);
    }
  };
  return (
    <Autocomplete
      onChange={(e, v) => handleChange(e, v)}
      value={props.selected}
      id="combo-box-demo"
      options={props.provinces}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Provincias" variant="outlined" />
      )}
    />
  );
};
export default ComboBox;
