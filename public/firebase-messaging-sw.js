importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyA5h1LnE61icjtscqjhM82po6-ALHlVyg4",
    authDomain: "cease-project.firebaseapp.com",
    databaseURL: "https://cease-project-default-rtdb.firebaseio.com",
    projectId: "cease-project",
    storageBucket: "cease-project.appspot.com",
    messagingSenderId: "1040376864167",
    appId: "1:1040376864167:web:c01717d731005c95eb6a82",
    measurementId: "G-R37MEE68RE"
  });

  const messaging = firebase.messaging();