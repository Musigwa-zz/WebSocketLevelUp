import express from 'express';
import morgan from 'morgan';
import socket from 'socket.io';

const { port = 8000 } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

const server = app.listen(port, () => {
  console.log(`Listening to port ${server.address().port}`);
});

const io = socket(server);

io.use((socket,) => {
  
}
)
io.on('connection', soc => {
  const { headers: { authorization } = {}, address } = soc.handshake;
  console.log('Token:', authorization, 'the address', address);
  console.log(`Connected a new client ${soc.id}`);
  soc.on('message', message => {
    console.log('A new message received', message);
  });
});

export default server;
