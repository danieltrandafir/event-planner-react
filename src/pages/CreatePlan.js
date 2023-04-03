import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { FormPlanner } from "../components/FormPlanner";
import { PageTitle } from "../components/PageTitle";

export const CreatePlan = ({ plans, setPlans, addPlan }) => {
  return (
    <Container
      sx={{
        backgroundColor: "lightGray",
        padding: "0.01rem 0 3rem 0",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Stack>
        <PageTitle title={"Make Your Plan!"} />
        <FormPlanner addPlan={addPlan} />
      </Stack>
    </Container>
  );
};
