import React, { useState, useEffect } from "react";
import { Grid, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomField from "../components/CustomField";
import Calendar from "../components/Calendar";
import Tickets from "../components/Tickets";

const useStyles = makeStyles(() => ({
  formContainer: {
    textAlign: "center",
  },
  box: {
    textAlign: "center",
  },
  form: {
    margin: "50px auto",
    width: "70% !important",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const initValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: null,
  tickets: 1,
};

function Form() {
  const [data, setData] = useState(initValues);
  const [date, setDate] = useState(null);
  const [errors, setErrors] = useState({});
  const [dateError, setDateError] = useState(false);

  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let v;

    if (name === "phone") v = value.replace(/ /g, "");
    else v = value;

    setData({
      ...data,
      [name]: v,
    });
  };

  useEffect(() => {
    setData({
      ...data,
      date: date,
    });
  }, [date]);

  const validate = (e) => {
    let temp = {};

    temp.firstName = data.firstName ? "" : "This field is required";
    temp.lastName = data.lastName ? "" : "This field is required";
    temp.email =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data.email
      )
        ? ""
        : "Invalid email";
    temp.phone = /^(\+971)?[0-9]{9}$/.test(data.phone)
      ? ""
      : "Invalid phone number";
    temp.date = data.date !== null ? "" : "This field is required";

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("successful");

    if (data.date === null) setDateError(true);
    else setDateError(false);
  };

  console.log(data);

  return (
    <div className={classes.formContainer}>
      <h1 className={classes.formHeader}>Book your tickets</h1>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={classes.box}
        onSubmit={handleSubmit}
      >
        <Grid container className={classes.form}>
          <CustomField
            value={data.firstName}
            label="First name"
            type="text"
            name="firstName"
            handleInputChange={handleInputChange}
            error={errors.firstName}
          />
          <CustomField
            value={data.lastName}
            label="Last name"
            type="text"
            name="lastName"
            handleInputChange={handleInputChange}
            error={errors.lastName}
          />
          <CustomField
            value={data.email}
            label="Email address"
            type="email"
            name="email"
            handleInputChange={handleInputChange}
            error={errors.email}
          />
          <CustomField
            value={data.phone}
            label="Phone number"
            type="text"
            name="phone"
            handleInputChange={handleInputChange}
            error={errors.phone}
          />
          <Calendar value={date} setDate={setDate} dateError={dateError} />
          <Tickets value={data.tickets} handleInputChange={handleInputChange} />
        </Grid>
        <Button variant="outlined" type="submit">
          Book tickets
        </Button>
      </Box>
    </div>
  );
}

export default Form;
