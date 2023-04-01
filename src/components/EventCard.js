import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";



import { useSearch } from "../context/SearchProvider";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const EventCard = ({ result, mode }) => {
  const { items, setItems, setResults } = useSearch();

  const handleAddToCart = () => {
    const newItems = [...items, result];

    localStorage.setItem("items", JSON.stringify(newItems));

    setItems(newItems);
    console.log(newItems)
  };

  const handleAddToWishList = () => {
    const wishListFromLS = getFromLocalStorage("wishList", []);

    const isPresent = wishListFromLS.find((each) => each.asin === result.asin);

    if (!isPresent) {
      wishListFromLS.push(result);

      localStorage.setItem("wishList", JSON.stringify(wishListFromLS));
    }
  };

  const handleRemoveFromWishList = () => {
    const wishListFromLS = getFromLocalStorage("wishList", []);

    const newItems = wishListFromLS.filter((each) => each.asin !== result.asin);

    localStorage.setItem("wishList", JSON.stringify(newItems));

    setResults(newItems);
  };

  return (
    <Card sx={{ width: "18rem", m: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={result.images[5].url}
        title='test'
      />
      <CardContent sx={{ minHeight: 150, fontSize: '1.5rem' }}>
        <Typography gutterBottom variant="h5" component="div">
          {result.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {result.dates.start.dateTime}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {result._embedded.venues[0].name},
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {result._embedded.venues[0].postalCode}.
        </Typography>

      </CardContent>
      <Box sx={{ textAlign: 'center', justifyContent: "center" }}>
        <Button src={result.url}>READ MORE</Button>
        <Button>ADD TO PLAN</Button>
      </Box>

    </Card>
  );
};