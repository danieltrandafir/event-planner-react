import { PlanCard } from "../components/PlanCard";
import { PageTitle } from "../components/PageTitle";
import Container from "@mui/material/Container";
import { Alert, AlertTitle, Box } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchProvider";
import { useEffect } from "react";
import { SearchResults } from "../components/SearchResults";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const MyPlans = ({ plans, setPlans }) => {
  const { results, setResults } = useSearch();

  useEffect(() => {
    const eventListFromLS = getFromLocalStorage("eventList", []);

    setResults(eventListFromLS);
  }, [setResults]);
  const navigate = useNavigate();

  return (
    <Container sx={{ justifyContent: "space-evenly" }}>
      <Container
        sx={{
          backgroundColor: "lightGray",
          padding: "0.01rem 0 3rem 0",
          marginTop: "2rem",
        }}
      >
        <PageTitle title={"My plans"} />
        <ListItem
          disablePadding
          sx={{ width: "max-content", margin: "auto", marginBottom: "2rem" }}
        >
          <Button
            onClick={() => {
              navigate("/create-plan");
            }}
            sx={{
              border: "1px solid black",
              margin: "auto",
              backgroundColor: "#ed6d42",
              "&:hover": { backgroundColor: "#3c3b78" },
            }}
            variant="contained"
          >
            Create New Plan
          </Button>
        </ListItem>

        <Box
          gap={2}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {plans.length > 0 ? (
            plans.map((plans) => (
              <PlanCard key={plans.id} plans={plans} setPlans={setPlans} />
            ))
          ) : (
            <Alert severity="warning">
              <AlertTitle>Oops, no plans!</AlertTitle>
              What are you waiting for? Make some plans!
            </Alert>
          )}
        </Box>
      </Container>
      <Container
        width="100%"
        sx={{
          backgroundColor: "lightGray",
          padding: ".1rem 0 2rem 0",
          margin: "2rem 0 0 0",
        }}
      >
        <PageTitle sx={{ color: "#3c3b78" }} title={"My Events"} />
        <ListItem
          disablePadding
          sx={{ width: "max-content", margin: "auto", marginBottom: "2rem" }}
        >
          <Button
            className="searchEventBTN"
            onClick={() => {
              navigate("/search-event");
            }}
            sx={{
              border: "1px solid black",
              justifyContent: "center",
              backgroundColor: "#ed6d42",
              "&:hover": { backgroundColor: "#3c3b78" },
            }}
            variant="contained"
          >
            Search Event
          </Button>
        </ListItem>
        <Box>
          {results.length === 0 && (
            <Alert severity="info">
              You have no items in your wish list. Please continue browsing and
              add items to your wish-list.
            </Alert>
          )}
          {results.length > 0 && <SearchResults results={results} />}
        </Box>
      </Container>
    </Container>
  );
};
