import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

export const NavBar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="static">
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/create-plan");
                setIsOpen(false);
              }}
            >
              <ListItemText primary="Create plan" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/search-event");
                setIsOpen(false);
              }}
            >
              <ListItemText primary="Search Event" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/plans");
                setIsOpen(false);
              }}
            >
              <ListItemText primary="My Plans" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/plans/:planId");
                setIsOpen(false);
              }}
            >
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Container maxWidth="xl" sx={{ backgroundColor: "#3c3b78" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box margin={"auto"}>
            <Typography
              variant="h4"
              component={"h1"}
              sx={{ fontFamily: "Alkatra, cursive", fontSize: "36px" }}
            >
              MAAD Events
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="contained"
              sx={{
                padding: "0 40px",
                backgroundColor: "#ed6d42",
                color: "white",
                display: "block",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>

            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => {
                navigate("/create-plan");
              }}
            >
              Create Plan
            </Button>

            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => {
                navigate("/search-event");
              }}
            >
              Search Event
            </Button>

            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => {
                navigate("/plans");
              }}
            >
              My Plans
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
