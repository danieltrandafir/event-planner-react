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
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Typography>
      </Box>
      <Stack
        py={4}
        gap={10}
        direction={"row"}
        sx={{ justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 320, textAlign: "center" }}>
          <CardMedia
            sx={{ height: 140 }}
            image="../images/jazmin-quaynor-18mUXUS8ksI-unsplash.jpg"
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
                  <ListItemText primary="Create plan" />
                </ListItemButton>
              </ListItem>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 320, textAlign: "center" }}>
          <CardMedia
            sx={{ height: 140 }}
            image="../images/jazmin-quaynor-18mUXUS8ksI-unsplash.jpg"
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
                  <ListItemText primary="Create plan" />
                </ListItemButton>
              </ListItem>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};
