import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import MediaQuery from "react-responsive"


import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

import HomeBackground from "../images/crowd-of-people-orange.jpg";
import CreateEventImage from "../images/2type-computer.jpg";
import SearchEvents from "../images/close-up-recording-video-with-smartphone-during-concert.jpeg";
import MyPlans from "../images/looking-at-phone.jpg";

const styles = {
  homeContainer: {
    backgroundImage: `url(${HomeBackground})`,
    backgroundSize: "cover",
    height: "100%vh",
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
    <Container style={styles.homeContainer} sx={{ maxWidth: 250, textAlign: "center" }}>
      <Box style={styles.banner}>
        <Typography
          pt={1}
          sx={{
            color: "#3c3b78",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          Organise and Map Your Itineraries In Our Free Event-Planning App
        </Typography>
        <Typography
          pt={1}
          sx={{
            color: "#3c3b78",
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
        >
          Want to explore something new? Discover new events below
        </Typography>
      </Box>
      <Stack
        py={4}
        gap={10}
        direction={"row"}
        sx={{ justifyContent: "center"}}
      >
        <Card sx={{ maxWidth: 250, textAlign: "center" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={CreateEventImage}
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#c94b10"
            >
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/create-plan");
                  }}
                >
                  <ListItemText
                    primary="CREATE PLAN"
                    sx={{ textAlign: "center" }}
                  />
                </ListItemButton>
              </ListItem>
            </Typography>
            <Typography variant="body2" color="#3c3b78">
              Create Your Own Itinerary And Share With Other Attendees
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 250, textAlign: "center" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={SearchEvents}
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#c94b10"
            >
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/search-event");
                  }}
                >
                  <ListItemText
                    primary="SEARCH EVENTS"
                    sx={{ textAlign: "center" }}
                  />
                </ListItemButton>
              </ListItem>
            </Typography>
            <Typography variant="body2" color="#3c3b78">
              Discover New And Upcoming Events All Over The World!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 250, textAlign: "center" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={MyPlans}
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#c94b10"
            >
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/plans");
                  }}
                >
                  <ListItemText
                    primary="MY PLANS"
                    sx={{ textAlign: "center" }}
                  />
                </ListItemButton>
              </ListItem>
            </Typography>
            <Typography variant="body2" color="#3c3b78">
              Keep, Review, and Manage Your Plans
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};
