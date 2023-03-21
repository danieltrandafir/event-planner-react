import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const PageTitle = ({ title }) => {
  return (
    <Box>
      <Typography
        sx={{ textAlign: "center", margin: "100px", backgroundColor: "green" }}
        variant="h3"
        component={"h1"}
      >
        {title}
      </Typography>
    </Box>
  );
};
