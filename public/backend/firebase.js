// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyA5h1LnE61icjtscqjhM82po6-ALHlVyg4",
authDomain: "cease-project.firebaseapp.com",
databaseURL: "https://cease-project-default-rtdb.firebaseio.com",
projectId: "cease-project",
storageBucket: "cease-project.appspot.com",
messagingSenderId: "1040376864167",
appId: "1:1040376864167:web:c01717d731005c95eb6a82",
measurementId: "G-R37MEE68RE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Create references for backend-related items.
const auth = firebase.auth();
const database = firebase.firestore();
// Timestamps for access.
database.settings({ timestampsInSnapshots:true });
// Set up messegger for Push Notifications.
