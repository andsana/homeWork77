import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { MessageMutation } from '../../types';
import MessageForm from '../../components/MessageForm/MessageForm';
import { selectCreateMessageLoading } from '../../store/messages/messagesSlice';
import { Typography } from '@mui/material';
import { createMessage } from '../../store/messages/messagesThunks';

const NewMessage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const creatingLoading = useAppSelector(selectCreateMessageLoading);

  const onSubmit = async (messageData: MessageMutation) => {
    await dispatch(createMessage(messageData));
    void navigate('/');
  };

  return (
    <>
      <Typography variant="h4" sx={{mb: 2}}>New message</Typography>
      <MessageForm onSubmit={onSubmit} isLoading={creatingLoading}/>
    </>

  );
};

export default NewMessage;