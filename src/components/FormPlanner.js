import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


export const FormPlanner = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Plan name</InputLabel>
                <Input id="component-simple" />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Plan date</InputLabel>
                <Input id="component-simple" />
            </FormControl>
            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Location</InputLabel>
                <Input id="component-simple" />
            </FormControl>
            <TextField
                name="query"
                placeholder="Add notes"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

        </Box>
    )
} 