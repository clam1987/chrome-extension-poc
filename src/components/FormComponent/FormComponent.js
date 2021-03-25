import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40em',
    },
  },
}));

const Form = ({ fields }) => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState();

  const handleInputChange = e => {
    const { value, name } = e.target;
    setFormValues({...formValues, [name]: value})
  }

  console.log(formValues)

  return (
    <Grid container>
      <Grid item xs={6}>
        <form className={classes.root} noValidate autoComplete="off">
            {fields.map(({ label, id, dataAttr, name }) => (
                <TextField
                  key={id}
                  id={id}
                  label={label}
                  type={label === 'Password' ? 'password' : 'none'}
                  data-cy={dataAttr}
                  name={name}
                  onChange={handleInputChange}
                />
            ))}
        </form>
      </Grid>
    </Grid>
  );
};

export default Form;
