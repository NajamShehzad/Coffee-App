importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD1iPf7LgFGxIZdUw2ZXzAtB315NZBAOGw",
  authDomain: "react-18091.firebaseapp.com",
  databaseURL: "https://react-18091.firebaseio.com",
  projectId: "react-18091",
  storageBucket: "react-18091.appspot.com",
  messagingSenderId: "1033848871314"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();