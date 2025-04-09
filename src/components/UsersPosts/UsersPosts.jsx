import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { PostsList } from '../PostsList/PostsList';

export const UsersPosts = ({ posts, comments }) => {
  const [showPosts, setShowPosts] = useState(false);

  const handleToggleShowPosts = () => {
    setShowPosts(!showPosts);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Button variant="contained" onClick={handleToggleShowPosts}>
        {showPosts ? 'Hide posts' : 'Show posts'}
      </Button>
      {showPosts && <PostsList posts={posts} comments={comments} />}
    </Box>
  );
};
