import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

import { SearchForm } from "../components/SearchForm";
import { useEffect, useState } from "react";
import { SearchResults } from "../components/SearchResults";

export const SearchEvent = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState();


  useEffect(() => {
    if (searchTerm) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          setError(false);
          const { data } = await axios.get(
            "https://app.ticketmaster.com/discovery/v2/events.json?apikey=2gtAGET8BPKkawzuckK9nLysRn93EEAC&size=100",
            {
              params: { apikey: process.env.REACT_APP_TICKETMASTER_API_KEY, countryCode: "GB", keyword: searchTerm },
            }
          );
          const finalData = data._embedded.events;
          console.log(finalData)
          setResults(finalData)

        } catch (error) {
          console.log(`[ERROR]: Failed to fetch data | ${error.message}`);

          setError(true);
        }

        setIsLoading(false);
      };

      fetchData();
    }
  }, [searchTerm]);

  const handleQuery = (query) => {
    setSearchTerm(query);
  };

  return (
    <Container maxWidth="lg">
      <Stack>
        <Box>
          <SearchForm handleQuery={handleQuery} />
        </Box>
        <Box>
          {isLoading && (
            <Backdrop sx={{ color: "#fff", zIndex: 4 }} open={isLoading}>
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
          {error && (
            <Alert severity="error">
              Failed to fetch results for {searchTerm}
            </Alert>
          )}
          {/* Card Container */}
          {results && <SearchResults results={results} />}
        </Box>
      </Stack>
    </Container>
  );
};
