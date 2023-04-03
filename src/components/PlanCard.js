import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MyPlan from "../images/3d-render-calendar-data-checklist-with-pencil.jpeg";


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

  console.log(plans.toto)
  return (
    <Card
      sx={{ m: "1", minWidth: "18rem" }}
    >
      <CardMedia
        sx={{ height: "140px" }}
        image={MyPlan}
        title="tbc"
      />
      <CardContent>
        <Stack textAlign={"center"}>
          <Typography variant="h4">{plans.title}</Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Organised by: {plans.name} {plans.surname}
          </Typography>
          <Typography variant="subtitle1">{plans.email}</Typography>
          <Typography>{plans.date}</Typography>
          <Typography variant="subtitle1">
            Location: {plans.location}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", gap: ".5rem" }}>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={handleRemovePlan}
          sx={{ backgroundColor: "#ed6d42", "&:hover": { backgroundColor: "#3c3b78" }, width: "6rem" }}
        >
          Remove
        </Button>
        <Button size="small" variant="contained" color="primary" sx={{ backgroundColor: "#3c3b78", "&:hover": { backgroundColor: "#ed6d42" }, width: "6rem" }}
        >
          View Plan
        </Button>
      </CardActions>
    </Card>
  );
};
