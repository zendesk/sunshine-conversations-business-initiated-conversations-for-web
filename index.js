require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const Smooch = require('smooch-core');

const smooch = new Smooch({
    keyId: process.env.APP_KEY_ID,
    secret: process.env.APP_KEY_SECRET,
    scope: 'app'
});

express()
    .use(express.static('public'))
    .use(bodyParser.json())
    .get('/app', (req, res) => res.json({ appId: process.env.APP_ID }))
    .get('/event', (req, res) => {
        smooch.appUsers.sendMessage(req.query.appUserId, {
            role: 'appMaker',
            name: 'The Website',
            type: 'text',
            text: 'Hi! You triggered an event.'
        });

        res.end();
    })
    .listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`));
