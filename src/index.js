// real-time-chat.js

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { encryptData, decryptData } = require('data-decr-encr');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Store connected users
const users = {};

io.on('connection', socket => {
    console.log('New user connected');

    // Handle new user joining the chat
    socket.on('join', username => {
        users[socket.id] = username;
        socket.broadcast.emit('userJoined', username);
    });

    // Handle new message from a user
    socket.on('message', encryptedMessage => {
        const sender = users[socket.id];
        const decryptedMessage = decryptData(encryptedMessage);
        socket.broadcast.emit('message', { sender, message: decryptedMessage });
    });

    // Handle user disconnecting from the chat
    socket.on('disconnect', () => {
        const username = users[socket.id];
        delete users[socket.id];
        socket.broadcast.emit('userLeft', username);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
