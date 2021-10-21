  (function (window) {
    'use strict';
    var App = window.App || {};
var FirebaseConfig = {
  apiKey: "AIzaSyCC_x9ohf3-ZkcA8BaYZv7E081_wni_WwE",
  authDomain: "coffeerun-d0152.firebaseapp.com",
  projectId: "coffeerun-d0152",
  storageBucket: "coffeerun-d0152.appspot.com",
  messagingSenderId: "950220003968",
  appId: "1:950220003968:web:5178c792646e27411f2465",
  measurementId: "G-J8VS5E6LRX"
};

App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);

    window.App = App;
    
})(window);