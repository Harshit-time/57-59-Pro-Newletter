import firebase from 'firebase';




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD10IKyMi9EAwwoMFo6m16_vr3P3gm-NG4",
    authDomain: "newsletter-57-59.firebaseapp.com",
    databaseURL: "https://newsletter-57-59.firebaseio.com",
    projectId: "newsletter-57-59",
    storageBucket: "newsletter-57-59.appspot.com",
    messagingSenderId: "695998770314",
    appId: "1:695998770314:web:71142f345be5c2510ad173"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.database();
