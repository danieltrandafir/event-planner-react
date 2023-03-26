import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

import HomeBackground from "../images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
import CreateEventImage from "../images/appointment-agenda-reminder-personal-organizer-calendar-concept.jpeg"
import SearchEvents from "../images/close-up-recording-video-with-smartphone-during-concert.jpeg"
import MyPlans from "../images/fashionable-african-american-bearded-male-sitting-near-coffee-shop-with-cup-coffee-using-smartphone.jpeg"
import { margin } from "@mui/system";

const styles = {
  homeContainer: {
    backgroundImage: `url(${HomeBackground})`,
    backgroundSize: "cover",
    height: "100vh",
    margin: 0,
    paddingTop: "50px",
    maxWidth: "100%",
  },
  banner: {
    width: "60%",
    margin: "auto",
  },
};

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container style={styles.homeContainer}>
      <Box style={styles.banner}>
        <Typography
          pt={1}
          sx={{
            color: "#fff",
            textAlign: "center",
            fontSize: "3.5rem",
          }}
        >
          CREATE YOUR PLAN
        </Typography>
        <Typography
          pt={1}
          sx={{
            color: "#fff",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          & DISCOVER NEW EVENTS
        </Typography>
      </Box>
      <Stack
        py={4}
        gap={10}
        direction={"row"}
        sx={{ justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 250, textAlign: "center" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={CreateEventImage}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/create-plan");
                  }}
                >
                  <ListItemText primary="CREATE PLAN" sx={{ textAlign: "center" }} />
                </ListItemButton>
              </ListItem>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Now you can use MAAD Events to create your own plan and share it with your frinds and family.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">Create your plan</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 250, textAlign: "center" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={SearchEvents}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/create-plan");
                  }}
                >
                  <ListItemText primary="SEARCH EVENTS" sx={{ textAlign: "center" }} />
                </ListItemButton>
              </ListItem>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Now, with our app you can discover all upcoming events that you love.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">Discover new events</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 250, textAlign: "center" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={MyPlans}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/create-plan");
                  }}
                >
                  <ListItemText primary="MY PLANS" sx={{ textAlign: "center" }} />
                </ListItemButton>
              </ListItem>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Check all your favourt events in your pocket and manage your future plans
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">Saved plans</Button>
          </CardActions>
        </Card>
      </Stack>
    </Container >
  );
};
