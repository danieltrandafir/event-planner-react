import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const FormPlanner = () => {
  return (
    <Container maxWidth="md">
      <Stack gap={2} component="form" autoComplete="off">
        <TextField label="Title" name="title" placeholder="Enter plan name" />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Pick a date" />
        </LocalizationProvider>

        <TextField name="location" label="Location" placeholder="Location" />

        <TextField multiline rows={5} name="notes" placeholder="Add notes" />
      </Stack>
    </Container>
  );
};
