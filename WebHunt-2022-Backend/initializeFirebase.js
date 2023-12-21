var admin = require("firebase-admin");

var serviceAccount = require("./webhunt-2022-firebase-adminsdk-zkdq9-ea66914522.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
