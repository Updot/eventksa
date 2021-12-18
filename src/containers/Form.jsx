import React, { useState, useEffect } from "react";
import { Grid, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomField from "../components/CustomField";
import Calendar from "../components/Calendar";
import Tickets from "../components/Tickets";
import CustomModal from "../components/CustomModal";

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

let formData = new FormData();

function Form() {
  const [data, setData] = useState(initValues);
  const [date, setDate] = useState(null);
  const [errors, setErrors] = useState({});
  const [dateError, setDateError] = useState(false);
  const [tickets, setTickets] = useState(1);
  const [success, setSuccess] = useState(false);

  const classes = useStyles();

  const validate = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.date === null) setDateError(true);
    else setDateError(false);

    if (validate()) {
      setSuccess(true);
      console.log(Array.from(formData));
    }
  };

  useEffect(() => {
    for (let key in data) formData.set(key, data[key]);
  }, [data]);

  useEffect(() => {
    setData({
      ...data,
      date: date,
    });
  }, [date]);

  useEffect(() => {
    setData({
      ...data,
      tickets: tickets,
    });
  }, [tickets]);

  useEffect(() => {
    setData(initValues);
  }, [success]);

  return (
    <>
      {success && <CustomModal setSuccess={setSuccess} />}
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
            <Calendar
              value={data.date}
              setDate={setDate}
              dateError={dateError}
            />
            <Tickets value={data.tickets} setTickets={setTickets} />
          </Grid>
          <Button variant="outlined" type="submit">
            Book tickets
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Form;
