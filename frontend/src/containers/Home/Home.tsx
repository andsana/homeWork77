import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { selectFetchMessageLoading, selectMessages } from '../../store/messages/messagesSlice';
import { fetchMessages } from '../../store/messages/messagesThunks';
import React, { useEffect } from 'react';
import MessageItem from '../../components/MessageItem/MessageItem';

const Home = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const messagesLoading = useAppSelector(selectFetchMessageLoading);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  let messagesArea: React.ReactNode = <CircularProgress/>;

  if (!messagesLoading && messages) {
    messagesArea = messages.map(message => (
      <MessageItem
        key={message.id}
        author={message.author}
        message={message.message}
        image={message.image}
      />
    ));
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Messages</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to="/new-message">
            Add Message
          </Button>
        </Grid>
      </Grid>

      <Grid item container spacing={1}>
        {messagesArea}
      </Grid>
    </Grid>
  );
};

export default Home;