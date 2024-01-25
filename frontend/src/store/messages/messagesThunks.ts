import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { AppDispatch } from '../../app/store';
import { Message, MessageMutation } from '../../types';

export const fetchMessages = createAsyncThunk<Message[], undefined, { dispatch: AppDispatch }>(
  'messages/fetchAll',
  async () => {
    const messagesResponse = await axiosApi.get<Message[]>('/messages');
    return messagesResponse.data;
  }
);

export const createMessage = createAsyncThunk<void, MessageMutation>(
  'messages/create',
  async (messageData) => {
    const formData = new FormData();
    formData.append('author', messageData.author);
    formData.append('message', messageData.message);

    if (messageData.image) {
      formData.append('image', messageData.image);
    }

    await axiosApi.post('/messages', formData);
  }
);




