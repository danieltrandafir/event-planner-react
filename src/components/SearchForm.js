import * as Yup from "yup";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

export const SearchForm = ({ handleQuery, search, setSearch }) => {
  // const initialValues = {
  //   query: "",
  // };

  // const validationSchema = Yup.object({
  //   query: Yup.string().required("Please enter a valid keyword"),
  // });

  // const onSubmit = ({ query }) => {
  //   console.log(query);
  //   handleQuery(query);
  // };

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit,
  // });

  return (
    <Container onSubmit={handleQuery} component="form">
      <TextField
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" />
    </Container>

    // <Box sx={{ my: 3 }} component="form" onSubmit={formik.handleSubmit}>
    //   <TextField
    //     onSubmit={handleQuery}
    //     name="query"
    //     placeholder="Search for event"
    //     fullWidth
    //     value={formik.values.query}
    //     error={!!formik.errors.query}
    //     helperText={formik.errors.query}
    //     onChange={formik.handleChange}
    //     InputProps={{
    //       endAdornment: (
    //         <InputAdornment position="end">
    //           <IconButton type="submit">
    //             <SearchIcon />
    //           </IconButton>
    //         </InputAdornment>
    //       ),
    //     }}
    //   />
    // </Box>
  );
};
