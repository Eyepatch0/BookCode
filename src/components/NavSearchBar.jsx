import { Container, IconButton, MenuItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const sampleSelectOptions = [
  { label: "Books", value: "books" },
  { label: "Profiles", value: "profiles" },
  { label: "Author", value: "author" },
  { label: "Publisher", value: "publisher" },
];

const NavSearchBar = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: 2,
        display: "flex",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search by title or author name"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => console.log("search")}
              sx={{
                color: "primary.main",
              }}
            >
              <SearchIcon fontSize="medium" />
            </IconButton>
          ),
        }}
        sx={{
          display: "flex",
          flexGrow: 1,
          boxShadow: 2,
          borderRadius: 2,
        }}
      />

      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="books"
        sx={{
          minWidth: {
            md: "10rem",
            sm: "60px",
          },
          ml: 2,
        }}
      >
        {sampleSelectOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </Container>
  );
};

export default NavSearchBar;
