import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
// import Divider from "@mui/material/Divider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";

export const FormPlanner = () => {
  return (
    <Container maxWidth="md">
      <Stack gap={2} component="form" autoComplete="off">
        <Typography textAlign={"center"} variant="h4">
          Organizer
        </Typography>

        <TextField name="name" label="Name" placeholder="Name" />
        <TextField name="surname" label="Surname" placeholder="Surname" />
        <TextField name="email" label="Email" placeholder="Email" />
        {/* <Divider sx={{ margin: "10px" }} /> */}

        <Typography textAlign={"center"} variant="h4">
          Plan details
        </Typography>

        <TextField label="Title" name="title" placeholder="Enter plan name" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Pick a date" />
        </LocalizationProvider>
        <TextField name="location" label="Location" placeholder="Location" />
        <TextField multiline rows={5} name="notes" placeholder="Add notes" />
        <Button
          sx={{ marginBottom: "30px" }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Create Plan
        </Button>
      </Stack>
    </Container>
  );
};
