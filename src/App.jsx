import { useEffect, useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { SearchBar } from './components/SearchBar/SearchBar';
import { UsersList } from './components/UsersList/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, postsResponse, commentsResponse] =
          await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/comments'),
          ]);

        const usersData = await usersResponse.json();
        const postsData = await postsResponse.json();
        const commentsData = await commentsResponse.json();

        setUsers(usersData);
        setPosts(postsData);
        setComments(commentsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Users posts with comments
        </Typography>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <UsersList users={filteredUsers} posts={posts} comments={comments} />
      </Box>
    </Container>
  );
};

export default App;
