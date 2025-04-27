import { Box, List, Typography } from '@mui/material';
import { PostComments } from '../PostComments/PostComments';

export const PostsList = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <Box
          key={post.id}
          sx={{
            p: 2,
            mt: 2,
            border: '1px solid #e0e0e0',
            borderRadius: 1,
            backgroundColor: '#ffffff',
          }}
        >
          <Typography variant="h6" component="div">
            {post.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {post.body}
          </Typography>
          <PostComments comments={post.comments} />
        </Box>
      ))}
    </List>
  );
};
