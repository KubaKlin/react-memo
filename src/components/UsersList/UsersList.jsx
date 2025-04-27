import { List, ListItem, Typography, Box } from '@mui/material';
import { UsersPosts } from '../UsersPosts/UsersPosts';

export const UsersList = ({ users }) => {
  return (
    <List sx={{ background: '#efefef' }}>
      {users.map((user) => (
        <ListItem key={user.id} sx={{ display: 'block' }}>
          <Box
            sx={{
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="h6" component="div">
              {user.name} - ({user.posts.length} posts)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
            <UsersPosts posts={user.posts} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
