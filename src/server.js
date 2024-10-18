const express = require('express')
const app = express();
const Socket = require('socket.io')
const http = require('http')
const path = require('path')
const server = http.createServer(app)
const io = Socket(server, {
    transports: ['polling'],
})
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname, + 'index.html'); 
});

io.on('connection', (socket) => {
    console.log('A new client connected:', socket.id);

    socket.emit('message', `Hello client ${socket.id}`);

    socket.on('disconnect', () => {
        console.log('client disconnected')
    }) 
    socket.on('messageFromClient', (data) => {
        console.log(data)
    })
})
server.listen(3000, () => {
    console.log('server is running on port 3000')
})
