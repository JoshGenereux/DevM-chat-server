const express = require('express');
const app = express();
const messages = require('./controllers/messages_controller');

app.use(express.json());

const url = '/api/messages';
app.post(url, messages.create);
app.get(url, messages.read);
app.put(url, messages.update);
app.delete(url, messages.delete)

app.listen(3001, ()=>console.log(`Running on server 3001`));