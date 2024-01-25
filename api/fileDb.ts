import { promises as fs } from 'fs';
import crypto from 'crypto';
import { Message, MessageWithoutId, } from './types';

const filename = './db.json';
let data: Message[] = [];

const fileDb = {
  async init() {
    try {
      const fileContenst = await fs.readFile(filename);
      data = JSON.parse(fileContenst.toString());
    } catch (e) {
      data = [];
    }
  },
  async getItems() {
    return data;
  },
  async addItem(item: MessageWithoutId) {
    const id = crypto.randomUUID();
    const message = {id, ...item};
    data.push(message);
    await this.save();

    return message;
  },
  async save() {
    return fs.writeFile(filename, JSON.stringify(data));
  }
};

export default fileDb;