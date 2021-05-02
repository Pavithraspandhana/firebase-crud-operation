import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: "AIzaSyASZ8PaLVLEFvx9YuFiPs8WqQgABIpJ-jI",
  authDomain: "react-projects-24ada.firebaseapp.com",
  databaseURL: "https://react-projects-24ada-default-rtdb.firebaseio.com",
  projectId: "react-projects-24ada",
  storageBucket: "react-projects-24ada.appspot.com",
  messagingSenderId: "440820676479",
  appId: "1:440820676479:web:58385c469802226f658c4a",
  measurementId: "G-N9NBJNHB75",
};
// Initialize Firebase
var baseDb = firebase.initializeApp(firebaseConfig);
export default baseDb.database().ref();
