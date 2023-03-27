import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

import { FormPlanner } from "../components/FormPlanner";
import { PageTitle } from "../components/PageTitle";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const CreatePlan = () => {
  const [plans, setPlans] = useState();

  useEffect(() => {
    const plansFromLS = getFromLocalStorage("plans", []);

    setPlans(plansFromLS);
  }, []);

  const addPlan = (plan) => {
    let plansFromLS = getFromLocalStorage("plans", []);
    console.log(plansFromLS);
    console.log(plan);

    plansFromLS.push(plan);
    // plansFromLS = [plan, ...plansFromLS];

    localStorage.setItem("plans", JSON.stringify(plansFromLS));

    setPlans(plansFromLS);
  };

  return (
    <Container maxWidth="lg">
      <Stack>
        <PageTitle title={"Make Your Plan!"} />
        <FormPlanner addPlan={addPlan} />
      </Stack>
    </Container>
  );
};
