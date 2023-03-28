import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useState } from "react";

import { FormPlanner } from "../components/FormPlanner";
import { PageTitle } from "../components/PageTitle";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const CreatePlan = () => {
  const [plans, setPlans] = useState(getFromLocalStorage("plans", []));

  // useEffect(() => {
  //   const plansFromLS = getFromLocalStorage();
  //   setPlans(plansFromLS);
  // }, []);

  const addPlan = (plan) => {
    // let plansFromLS = getFromLocalStorage("plans", []);
    // plansFromLS.push(plan);
    const newPlans = [plan, ...plans];
    localStorage.setItem("plans", JSON.stringify(newPlans));
    setPlans(newPlans);
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
