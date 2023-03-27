import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const PlanCard = () => {
  let planInfoFromLS = localStorage.getItem("plans");
  planInfoFromLS = JSON.parse(planInfoFromLS);

  console.log(planInfoFromLS);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {planInfoFromLS[0].name} {planInfoFromLS[0].surname}
        </Typography>
        <Typography variant="h5">{planInfoFromLS[0].email}</Typography>
        <Typography variant="h5">{planInfoFromLS[0].location}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
