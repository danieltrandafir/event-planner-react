import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const PlanCard = ({ plans, setPlans }) => {
  // remove plans from MyPlans page
  const handleRemovePlan = () => {
    // retrieve list of plans from LS
    const planListFromLS = getFromLocalStorage("plans", []);
    // create new array after filter for condition
    const newList = planListFromLS.filter(
      (eachPlan) => eachPlan.id !== plans.id
    );
    localStorage.setItem("plans", JSON.stringify(newList));
    setPlans(newList);
  };

  return (
    <Card
      sx={{ mt: "1rem", minWidth: "16rem", boxShadow: "-3px 4px 6px 1px #000" }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="../images/debby-hudson-vb0r4K_J1h8-unsplash.jpg"
        title="tbc"
      />
      <CardContent>
        <Stack textAlign={"center"}>
          <Typography variant="h4">{plans.title}</Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Organised by: {plans.name} {plans.surname}
          </Typography>
          <Typography variant="subtitle1">{plans.email}</Typography>
          <Typography variant="subtitle1">
            Location: {plans.location}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={handleRemovePlan}
        >
          Remove
        </Button>
        <Button size="small" variant="contained" color="primary">
          View Plan
        </Button>
      </CardActions>
    </Card>
  );
};
