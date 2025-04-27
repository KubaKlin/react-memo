import { TextField, Box } from '@mui/material';

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box>
      <TextField
        fullWidth
        label="Search users by name or email"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </Box>
  );
};
