import { MessageMutation } from '../../types';
import React, { useState } from 'react';
import FileInput from '../FileInput/FileInput';
import { Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const initialState: MessageMutation = {
  author: '',
  message: '',
  image: null,
};

interface Props {
  onSubmit: (message: MessageMutation) => void;
  isLoading?: boolean;
}

const MessageForm: React.FC<Props> = ({onSubmit, isLoading = false}) => {
  const [message, setMessage] = useState(initialState);

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (files) {
      setMessage(prevState => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    onSubmit(message);
  };

  return (
    <form onSubmit={onFormSubmit} style={{maxWidth: '400px'}}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="author" label="Author"
            name="author"
            value={message.author}
            onChange={changeMessage}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="message" label="Message"
            name="message"
            value={message.message}
            onChange={changeMessage}
          />
        </Grid>
        <Grid item xs>
          <FileInput
            onChange={fileInputChangeHandler}
            name="image"
            label="Product image"
          />
        </Grid>
        <Grid item xs>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon/>}
          >
            Create
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default MessageForm;