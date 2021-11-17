// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqkfowBLpr9Jwl7PsGggV68Mtod2c2sPY",
  authDomain: "aaravinfoservices-55a36.firebaseapp.com",
  databaseURL: "https://aaravinfoservices-55a36-default-rtdb.firebaseio.com",
  projectId: "aaravinfoservices-55a36",
  storageBucket: "aaravinfoservices-55a36.appspot.com",
  messagingSenderId: "567647139518",
  appId: "1:567647139518:web:3ce60ec2e395edb9d850ef",
  measurementId: "G-1Y421HE09K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Roomname-" + Room_names);
   //End code
   });});}
getData()