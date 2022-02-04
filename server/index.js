const express = require('express');
const app = express();
const messages = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const url = '/api/messages';
app.post(url, messages.create);
app.get(url, messages.read);
app.put(`${url}/:id`, messages.update);
app.delete(`${url}/:id`, messages.delete)

app.listen(3001, ()=>console.log(`Running on server 3001`));