angular.module('starter.services', ['firebase'])

.factory('Items', function($firebaseArray) {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXXLUvt5ivF9CJEjV_ldf_bFda2uSEKwE",
    authDomain: "my-ionic-app-2de24.firebaseapp.com",
    databaseURL: "https://my-ionic-app-2de24.firebaseio.com",
    storageBucket: "my-ionic-app-2de24.appspot.com",
    messagingSenderId: "932987257015"
  };
  firebase.initializeApp(config);

  var rootRef = firebase.database().ref();

  //var itemsRef = new Firebase("https://my-ionic-app-2de24.firebaseio.com/items");
  return $firebaseArray(rootRef);
});
