(function() {

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAiM5rQbZUjy5ZFWae2m8--jlAdbFp10Gw",
  authDomain: "first-react-app-a7079.firebaseapp.com",
  databaseURL: "https://first-react-app-a7079.firebaseio.com",
  storageBucket: "first-react-app-a7079.appspot.com",
};
firebase.initializeApp(config);

//Get Elements
const preObject = document.getElementById('object');

//Create references
const dbRefObject = firebase.database().ref().child('object');

//Sync object changes
dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
});

}());
