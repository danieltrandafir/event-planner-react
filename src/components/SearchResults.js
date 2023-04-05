import Container from "@mui/material/Container";
import { EventCard } from "./EventCard"

export const SearchResults = ({ results }) => {

    console.log(results)
    return (
        <Container
            maxWidth="lg"
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
        >
            {results.map((result) => {
                return <EventCard key={result.id} result={result} showBtn={true} />;
            })}
        </Container>
    );
};

//  Namring