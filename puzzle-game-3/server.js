const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 4000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/second', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'second.html'));
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('reveal', () => {
        console.log('Reveal event received on the server');
        io.emit('reveal_answer');
    });

    socket.on('next', () => {
        console.log('Next event received on the server');
        io.emit('next_puzzle');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
