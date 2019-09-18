import socketIO from 'socket.io-client';

export const baseURL = 'https://angry-sloth-97.localtunnel.me';

const socket = socketIO(baseURL, {
  transports: ['polling'],
  autoConnect: true,
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: `Bearer myself token`
      }
    }
  }
});

export default socket;
