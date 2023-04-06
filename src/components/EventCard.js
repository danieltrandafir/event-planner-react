import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const EventCard = ({ result, mode }) => {
  const handleAddToPlan = () => {
    const planListFromLS = getFromLocalStorage("eventList", []);

    const isPresent = planListFromLS.find((each) => each.id === result.id);
    console.log(isPresent);
    console.log(result.id);

    if (!isPresent) {
      planListFromLS.push(result);

      localStorage.setItem("eventList", JSON.stringify(planListFromLS));
    }
  };

  return (
    <Card sx={{ width: "18rem", m: "1rem", justifyContent: "space-evenly" }}>
      <CardMedia
        sx={{ height: "140px" }}
        image={result.images[5].url}
        title="event image"
      />
      <CardContent
        sx={{ minHeight: 175, fontSize: "1.5rem", textAlign: "center" }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {result.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Event date: {result.dates.start.localDate}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Starts @ {result.dates.start.localTime}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Venue: {result._embedded.venues[0].name},{" "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: {result._embedded.venues[0].address.line1},{" "}
          {result._embedded.venues[0].postalCode}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-evenly", gap: "15rem" }}>
        <Box
          sx={{
            textAlign: "center",
            justifyContent: "space-evenly",
            gap: "2rem",
            alignItems: "center",
            color: "#3c3b78",
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#ed6d42",
              marginRight: ".5rem",
              "&:hover": { backgroundColor: "#3c3b78" },
            }}
            href={result.url}
          >
            READ MORE
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{
              marginLeft: ".5rem",
              backgroundColor: "#3c3b78",
              "&:hover": { backgroundColor: "#ed6d42" },
            }}
            onClick={handleAddToPlan}
          >
            ADD TO PLAN
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
