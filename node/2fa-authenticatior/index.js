const express = require('express');
const QRCode = require('qrcode');
const speakeasy = require('speakeasy');
const fs = require("fs");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    var userToken = params.get('token');

// Load the secret.base32 from their user record in database
// var secret = ...

// // Verify that the user token matches what it should at this moment
// var verified = speakeasy.totp.verify({
//   secret: secret,
//   encoding: 'base32',
//   token: userToken
// });
 });

app.get('/create', (req, res) => {
    const secret = speakeasy.generateSecret({ length: 20 });

    console.log(secret.base32);

    QRCode.toDataURL(secret.otpauth_url, function (err, image_data) {
        console.log(image_data);

        let base64Image = image_data.split(';base64,').pop();

        fs.writeFile('image.png', base64Image, { encoding: 'base64' }, function (err) {
            console.log('File created');
        });

    });

    res.send('Test OK!');
});

app.listen(3333, () => console.log(`Listening on port 3333`));