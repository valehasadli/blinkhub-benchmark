const express = require('express');
const blinkhub = require('blink-hub');
const app = express();
const port = 3000;

const userEmitter = new blinkhub.default

userEmitter.subscribe('userLoggedIn', (username) => {
    console.log(`${username} logged in`);
});

app.get('/login/:username', (req, res) => {
    userEmitter.emit('userLoggedIn', req.params.username);
    res.send('Login event emitted');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
