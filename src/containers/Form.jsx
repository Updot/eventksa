import React, { useState, useEffect } from "react";
import { Grid, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomField from "../components/CustomField";
import Calendar from "../components/Calendar";
import Tickets from "../components/Tickets";
import CustomModal from "../components/CustomModal";
import CustomSelect from "../components/CustomSelect";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Title from "../components/Title";
import Safe from "../components/Safe";
import Info from "../components/Info";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    backgroundColor: "white",
    margin: "0 auto 50px auto",
    padding: "30px 0 100px 0",
    textAlign: "center",
    width: "90%",
  },
  box: {
    textAlign: "center",
  },
  form: {
    margin: "auto",
    width: "90% !important",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightContainer: {
    textAlign: "left",

    [theme.breakpoints.up("md")]: {
      paddingRight: 100,
    },
  },
  buttonsContainer: {
    margin: "50px 0",
    justifyContent: "space-between",
  },
}));

const initValues = {
  mr: null,
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  province: "",
  pickedDate: "",
  noOfTickets: 1,
};

let formData = new FormData();

function Form() {
  const [data, setData] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [title, setTitle] = useState(null);
  const [pickedDate, setPickedDate] = useState(null);
  const [province, setProvince] = useState("");
  // const [noOfTickets, setNoOfTickets] = useState(1);
  const [success, setSuccess] = useState(false);

  const classes = useStyles();

  const validate = () => {
    let temp = {};

    temp.mr = data.mr !== null ? "" : "This field is required";
    temp.firstName = data.firstName ? "" : "This field is required";
    temp.lastName = data.lastName ? "" : "This field is required";
    temp.email =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data.email
      )
        ? ""
        : "Invalid email";
    temp.phoneNumber = /^(\+971)?[0-9]{9}$/.test(data.phoneNumber)
      ? ""
      : "Invalid phone number";
    temp.pickedDate = data.pickedDate !== "" ? "" : "This field is required";
    temp.province = data.province !== "" ? "" : "This field is required";

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let v;

    if (name === "phoneNumber") v = value.replace(/ /g, "");
    else v = value;

    setData({
      ...data,
      [name]: v,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(Array.from(formData));

    if (validate()) {
      axios
        .post("https://updot.in/chaumet/index.php/api/register", formData)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) setSuccess(true);
        });

      // axios({
      //   method: "post",
      //   url: "https://updot.in/chaumet/index.php/api/register",
      //   data: formData,
      //   headers: { "Content-Type": "multipart/form-data" },
      // })
      //   .then(function (response) {
      //     //handle success
      //     console.log(response);
      //   })
      //   .catch(function (response) {
      //     //handle error
      //     console.log(response);
      //   });

      // setSuccess(true);
    }
  };

  const clearFields = () => {
    setData(initValues);
    setTitle(null);
  };

  useEffect(() => {
    for (let key in data) formData.set(key, data[key]);
  }, [data]);

  useEffect(() => {
    if (pickedDate === null)
      setData({
        ...data,
        pickedDate: "",
      });
    else
      setData({
        ...data,
        pickedDate: `${pickedDate.getFullYear()}-01-${pickedDate.getDate()}`,
      });
  }, [pickedDate]);

  useEffect(() => {
    setData({
      ...data,
      mr: title,
    });
  }, [title]);

  // useEffect(() => {
  //   setData({
  //     ...data,
  //     noOfTickets: noOfTickets,
  //   });
  // }, [noOfTickets]);

  useEffect(() => {
    setData({
      ...data,
      province: province,
    });
  }, [province]);

  useEffect(() => {
    setData(initValues);
  }, [success]);

  return (
    <>
      {success && <CustomModal setSuccess={setSuccess} />}
      <div className={classes.formContainer}>
        <Box
          component="form"
          novalidate
          autoComplete="off"
          className={classes.box}
          onSubmit={handleSubmit}
        >
          <Grid
            container
            className={classes.form}
            justifyContent="space-between"
          >
            <Title value={data.mr} setTitle={setTitle} error={errors.mr} />
            <CustomField
              value={data.firstName}
              label="First name"
              type="text"
              name="firstName"
              handleInputChange={handleInputChange}
              error={errors.firstName}
              sm={12}
            />
            <CustomField
              value={data.lastName}
              label="Last name"
              type="text"
              name="lastName"
              handleInputChange={handleInputChange}
              error={errors.lastName}
              sm={12}
            />
            <CustomSelect
              value={data.province}
              setProvince={setProvince}
              error={errors.province}
              sm={4}
            />
            <CustomField
              value={data.phoneNumber}
              label="Phone number"
              type="text"
              name="phoneNumber"
              handleInputChange={handleInputChange}
              error={errors.phoneNumber}
              sm={4}
            />
            <CustomField
              value={data.email}
              label="Email address"
              type="email"
              name="email"
              handleInputChange={handleInputChange}
              error={errors.email}
              sm={4}
            />
            <Safe />

            {/* <Tickets value={data.tickets} setNoOfTickets={setNoOfTickets} /> */}

            <Grid style={{ margin: "20px 0" }} item xs={12}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Calendar
                  value={pickedDate}
                  setPickedDate={setPickedDate}
                  error={errors.pickedDate}
                />
                <Grid className={classes.rightContainer} item xs={12} md={6}>
                  <Info value={pickedDate} />
                  <Grid container className={classes.buttonsContainer}>
                    <Grid item xs={5}>
                      <Button
                        startIcon={<CloseIcon />}
                        disableElevation
                        variant="contained"
                        style={{
                          width: "100%",
                          backgroundColor: "#D4D4D4",
                          color: "black",
                          textTransform: "capitalize",
                        }}
                        onClick={clearFields}
                      >
                        Discard
                      </Button>
                    </Grid>
                    <Grid item xs={5}>
                      <Button
                        startIcon={<CheckIcon />}
                        disableElevation
                        style={{ width: "100%", textTransform: "capitalize" }}
                        variant="contained"
                        type="submit"
                      >
                        Confirm
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Form;
