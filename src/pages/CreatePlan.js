import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { FormPlanner } from "../components/FormPlanner";
import { PageTitle } from "../components/PageTitle";

export const CreatePlan = ({ plans, setPlans, addPlan }) => {
  ;

  return (
    <Container maxWidth="lg">
      <Stack>
        <PageTitle title={"Make Your Plan!"} />
        <FormPlanner addPlan={addPlan} />
      </Stack>
    </Container>
  );
};
