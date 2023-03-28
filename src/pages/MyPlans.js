import { Stack } from "@mui/system";
import { PlanCard } from "../components/PlanCard";
import { PageTitle } from "../components/PageTitle";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";


export const MyPlans = ({ plans, setPlans }) => {
  return (
    <Container maxWidth="lg"
      sx={{ justifyContent: "space-evenly" }}>
      <PageTitle title={"See your plans!"} />
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>

        {plans
          ? plans.map((plan) => (
            <PlanCard plan={plan} setPlan={setPlans} />
          ))
          : "No Plans made"}
      </Box>
    </Container>
  );
};
