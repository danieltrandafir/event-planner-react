import { PlanCard } from "../components/PlanCard";
import { PageTitle } from "../components/PageTitle";
import Container from "@mui/material/Container";
import { Alert, AlertTitle, Box } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export const MyPlans = ({ plans, setPlans }) => {
  const navigate = useNavigate();
  return (
    <Container sx={{ justifyContent: "space-evenly" }}>
      <PageTitle title={"See your plans!"} />
      <Box
        gap={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {plans.length > 0 ? (
          plans.map((plans) => (
            <PlanCard key={plans.id} plans={plans} setPlans={setPlans} />
          ))
        ) : (
          <Alert severity="warning">
            <AlertTitle>Oops, no plans!</AlertTitle>
            What are you waiting for? Make some plans!
          </Alert>
        )}

        <ListItem disablePadding sx={{ width: "max-content" }}>
          <Button
            onClick={() => {
              navigate("/create-plan");
            }}
            sx={{ border: "1px solid black", margin: "auto" }}
            variant="contained"
          >
            Create Plan
          </Button>
        </ListItem>
      </Box>
    </Container>
  );
};
