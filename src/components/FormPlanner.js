import * as React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
// import Divider from "@mui/material/Divider";
import { useFormik } from "formik";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";

export const FormPlanner = () => {
  const [plan, setPlan] = useState([]);
  // state for date picker
  const [value, setValue] = React.useState(null);
  // Add the initial values
  const initialValues = {
    // Organizers iniial values
    name: "",
    surname: "",
    email: "",
    // Plan details initial values
    title: "",
    // date: "",
    location: "",
    notes: "",
  };

  // Add the validation-schema
  const validationSchema = Yup.object({
    // Organizers validation schema
    name: Yup.string().required("Please enter your name."),
    surname: Yup.string().required("Please enter your surname."),
    email: Yup.string()
      .required("Please enter an email address.")
      .email("Please enter a valid email address."),
    // Plan details validation schema
    title: Yup.string(),
    date: Yup.number().required("Please choose a date"),
    location: Yup.string().required("Please enter a location."),
    notes: Yup.string().max(200, "Minimum character count is 100."),
  });

  // Add on submit call back funcation
  const onSubmit = ({ name, surname, email, title, date, location, notes }) => {
    console.log("submitted");
  };

  // Use formic hoock
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container maxWidth="md">
      <Stack
        gap={2}
        component="form"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Typography textAlign={"center"} variant="h4">
          Organizer
        </Typography>

        <TextField
          name="name"
          label="Name"
          placeholder="Name"
          value={formik.values.name}
          error={!!formik.errors.name}
          helperText={formik.errors.name}
          onChange={formik.handleChange}
        />
        <TextField
          name="surname"
          label="Surname"
          placeholder="Surname"
          value={formik.values.surname}
          error={!!formik.errors.surname}
          helperText={formik.errors.surname}
          onChange={formik.handleChange}
        />
        <TextField
          name="email"
          label="Email"
          placeholder="Email"
          value={formik.values.email}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          onChange={formik.handleChange}
        />
        {/* <Divider sx={{ margin: "10px" }} /> */}

        <Typography textAlign={"center"} variant="h4">
          Plan details
        </Typography>

        <TextField
          label="Title"
          name="title"
          placeholder="Enter plan name"
          value={formik.values.title}
          error={!!formik.errors.title}
          helperText={formik.errors.title}
          onChange={formik.handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          name="location"
          label="Location"
          placeholder="Location"
          value={formik.values.location}
          error={!!formik.errors.location}
          helperText={formik.errors.location}
          onChange={formik.handleChange}
        />
        <TextField
          multiline
          rows={5}
          name="notes"
          placeholder="Add notes"
          value={formik.values.notes}
          error={!!formik.errors.notes}
          helperText={formik.errors.notes}
          onChange={formik.handleChange}
        />
        <Button
          sx={{ marginBottom: "30px" }}
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
        >
          Create Plan
        </Button>
      </Stack>
    </Container>
  );
};
