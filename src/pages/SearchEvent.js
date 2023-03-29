import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { SearchForm } from "../components/SearchForm";
import { useState } from "react";
import { useFetch } from "../CustomHooks/useFetch";

export const SearchEvent = () => {
  const [search, setSearch] = useState("London");
  const [searchForAPI, setSearchForAPI] = useState(search);

  const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=2gtAGET8BPKkawzuckK9nLysRn93EEAC&size=50&countryCode=GB&keyword=${searchForAPI}`;

  // `"https://app.ticketmaster.com/discovery/v2/events.json?apikey=2gtAGET8BPKkawzuckK9nLysRn93EEAC&size=100",
  // {
  //   params: {
  //     apikey: process.env.REACT_APP_TICKETMASTER_API_KEY,
  //     countryCode: "GB",
  //     keyword: ${searchForAPI},
  //   },
  // }`

  const { data, isLoading, error } = useFetch(BASE_URL);

  const handleQuery = (e) => {
    e.preventDefault();
    setSearchForAPI(search);
    console.log(search);
  };

  return (
    <Container maxWidth="lg">
      <Stack>
        <Box>
          <SearchForm
            handleQuery={handleQuery}
            search={search}
            setSearch={setSearch}
          />
        </Box>
        <Box>
          {isLoading && (
            <Backdrop sx={{ color: "#fff", zIndex: 4 }} open={isLoading}>
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
          {error && (
            <Alert severity="error">Failed to fetch results for {data}</Alert>
          )}
        </Box>
      </Stack>
    </Container>
  );
};
