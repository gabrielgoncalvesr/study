var push = require('web-push');

let vapidKeys = {
    publicKey: 'BNRTxS4W7EViHZqRXB1OTX2z0e0wT4sI0Be5VIHM81ij36zp0kMg4jW_tsTlCQ7-AymmdRdfLtjE3gRNIXTMn5w',
    privateKey: 'oyBDAQg3HEuk-bMvU4HCKNiWAeWIds3E97fDs4eGiIw'
}

push.setVapidDetails('mailto:test@code.co.uk',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dembGB-7mOo:APA91bFHwag9WSSIdqfrENDn_2MqCqYzg7h9PVQl9ZHYmY0ZHHoM2tErljuKFmBEscPX6xq8n6aR1Yz15uwh9DA-0LfrFouCXN--2jNv_Sjho3x3xn-s2VwS6OUU_oYK-i0UoFy9NZWU", "expirationTime": null, "keys": { "p256dh": "BKbYLv5PDmHqj3BpA9LIWD-cb2d0_xKMnyCFbVQJ45n5zPSlbJtC3ajXcigxf-a1prTqSRKJa3EEfeWXhc2xkVU", "auth": "cRM4D30GC3_Bu6sOJ4U_sw" } }

push.sendNotification(sub, 'test message2')