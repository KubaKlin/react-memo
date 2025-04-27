import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { CommentList } from '../CommentList/CommentList';

export const PostComments = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);

  const handleToggleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleToggleShowComments}>
        {showComments ? 'Hide comments' : 'Show comments'}
      </Button>
      {showComments && <CommentList comments={comments} />}
    </Box>
  );
};
