// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

firebase.analytics();
// Create references for backend-related items.
const auth = firebase.auth();
const database = firebase.firestore();
// Timestamps for access.
database.settings({ timestampsInSnapshots:true });
// Set up messegger for Push Notifications.
