import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FormComponent from "../../components/FormComponent/FormComponent";
import header from "../../assets/imgs/android-chrome-512x512.png";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    width: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  requisitionTitle: {
    color: "#797979",
    fontWeight: 600
  },
}));

const MMForm = () => {
    const [requistionType, setRequistionType] = useState("");
    const classes = useStyles();
  const fields = [
    {
      label: "Name",
      id: "mm-form-name",
      dataAttr: "mm-form-name-field",
      name: "name",
    },
    {
      label: "Company",
      id: "mm-form-comapny",
      dataAttr: "mm-form-comapny-field",
      name: "company",
    },
    {
      label: "Title",
      id: "mm-form-title",
      dataAttr: "mm-form-title-field",
      name: "title",
    },
    {
      label: "Phone Number",
      id: "mm-form-phoneNumber",
      dataAttr: "mm-form-phoneNumber-field",
      name: "phoneNumber",
    },
    {
      label: "Email",
      id: "mm-form-email",
      dataAttr: "mm-form-email-field",
      name: "email",
    },
  ];

  const handleChange = (e) => {
    setRequistionType(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={12}>
          <img
            src={header}
            width={200}
            height={150}
            style={{ display: "block", margin: "0 auto" }}
            alt="MM logo"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            align="left"
            className={classes.requisitionTitle}
          >
            REQUISITION
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Charlotte Loan Officers
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={requistionType}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
            <Grid container>
            <Grid item xs={10}>
        <Typography
            variant="h5"
            component="h2"
            gutterBottom
            align="left"
            className={classes.requisitionTitle}
          >
            CONTACT DETAILS
          </Typography>
            </Grid>
            <Grid item xs={2}>
                <Button>Duplicate?</Button>
            </Grid>
            </Grid>
          <FormComponent fields={fields} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MMForm;
