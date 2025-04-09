import { List, ListItem, Typography, Box } from '@mui/material';

export const CommentList = ({ comments }) => {
  return (
    <List>
      {comments.map((comment) => (
        <ListItem key={comment.id} sx={{ display: 'block' }}>
          <Box
            sx={{
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              backgroundColor: '#fafafa',
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              {comment.email}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {comment.body}
            </Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
