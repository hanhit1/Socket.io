const socket = io('http://localhost:3000', { transports: ['polling'] });
console.log(socket);
socket.on('message', (data) => {
    document.getElementById('message').textContent = data;
});
socket.emit('messageFromClient','Hello server')

