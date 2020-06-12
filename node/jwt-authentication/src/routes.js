const express = require('express');
const router = express.Router();

const { authenticateJWT, generateToken } = require('./security/jwt');

const clients = [
    { id: 1, user: 'luiz@gmail.com', pwd: '123456A' },
    { id: 2, user: 'paula.gmail.com', pwd: '1234567' }
]

router.get('/', (req, res, next) => {
    res.json({ message: "listening" });
});

router.get('/clients', authenticateJWT, (req, res, next) => {
    console.log("returning all clients");
    res.json(clients);
});

router.post('/login', (req, res, next) => {
    const { user, pwd } = req.body;

    const client = clients.filter(item => item.user === user && item.pwd === pwd);
    if (!client) {
        return res.status(401).json({ message: 'invalid login' });
    }

    const token = generateToken(client.id);
    res.json({ auth: true, token });
});

router.post('/logout', function (req, res) {
    res.json({ auth: false, token: null });
})

module.exports = router;