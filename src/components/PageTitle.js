import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const PageTitle = ({ title }) => {
  return (
    <Box>
      <Typography
        fontFamily={"Merriweather, serif"}
        sx={{ textAlign: "center", margin: " 50px", fontWeight: 700 }}
        variant="h3"
        component={"h1"}
      >
        {title}
      </Typography>
    </Box>
  );
};
