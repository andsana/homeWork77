import { MessageWithoutId } from '../types';
import fileDb from '../fileDb';
import { Router } from 'express';
import { imagesUpload } from '../multer';

const messagesRouter = Router();

messagesRouter.get('/', async (req, res) => {
  const messages = await fileDb.getItems();
  res.send(messages);
});

messagesRouter.post('/', imagesUpload.single('image'), async (req, res) => {

  const messageText = req.body.message;

  if (!messageText) {
    return res.status(400).send('Message is required.');
  }

  const message: MessageWithoutId = {
    author: req.body.author || 'Anonymous',
    message: messageText,
    image: req.file ? req.file.filename : null,
  };

  const newMessage = await fileDb.addItem(message);
  res.send(newMessage);
});

export default messagesRouter;