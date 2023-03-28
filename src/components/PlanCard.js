import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/system";


export const PlanCard = ({ plan, setPlans }) => {
  return (
    <Container>

      <Card sx={{ maxWidth: '18rem', boxShadow: "-3px 4px 6px 1px #000" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="../images/debby-hudson-vb0r4K_J1h8-unsplash.jpg"
          title="tbc"
        />
        <CardContent>
          <Stack textAlign={"center"}>
            <Typography variant="h3">{plan.title}</Typography>
            <Typography gutterBottom variant="h5" component="div">
              Organised by: {plan.name}{' '}{plan.surname}
            </Typography>
            <Typography variant="h5">{plan.email}</Typography>
            <Typography variant="h5">
              Location: {plan.location}
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
