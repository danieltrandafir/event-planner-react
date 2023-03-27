import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/system";

import { PageTitle } from "./PageTitle";

export const PlanCard = () => {
  let planInfoFromLS = localStorage.getItem("plans");
  planInfoFromLS = JSON.parse(planInfoFromLS);

  console.log(planInfoFromLS);

  return (
    <Container>
      <PageTitle title={"See your plans!"} />

      <Card sx={{ maxWidth: 345, boxShadow: "-3px 4px 6px 1px #000" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="../images/debby-hudson-vb0r4K_J1h8-unsplash.jpg"
          title="tbc"
        />
        <CardContent>
          <Stack textAlign={"center"}>
            <Typography variant="h3">{planInfoFromLS[0].title}</Typography>
            <Typography gutterBottom variant="h5" component="div">
              Organised by: {planInfoFromLS[0].name} {planInfoFromLS[0].surname}
            </Typography>
            <Typography variant="h5">{planInfoFromLS[0].email}</Typography>
            <Typography variant="h5">
              Location: {planInfoFromLS[0].location}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button size="small" variant="contained" color="error">
            Remove
          </Button>
          <Button size="small" variant="contained" color="primary">
            View Plan
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
