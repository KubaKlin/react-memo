import { List, ListItem, Typography, Box } from '@mui/material';
import { UsersPosts } from '../UsersPosts/UsersPosts';

export const UsersList = ({ users, posts, comments }) => {
  const getUserPostsCount = (userId) => {
    return posts.filter((post) => post.userId === userId).length;
  };

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
              {user.name} - ({getUserPostsCount(user.id)} posts)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
            <UsersPosts
              user={user}
              posts={posts.filter((post) => post.userId === user.id)}
              comments={comments}
            />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
