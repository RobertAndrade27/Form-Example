import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  textField: {
    width: '100%',
    maxWidth: '100%',
  },
});

function InputText(props) {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      className={classes.textField}
      label={props.label}
      required={props.required}
      value={props.value || ''}
      onChange={props.onChange}
      inputProps={{ maxLength: props.maxLength }}
      InputLabelProps={{ shrink: true }}
      margin="dense"
      variant="outlined"
    />
  );
}

export default InputText;
