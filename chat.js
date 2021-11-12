const firebaseConfig = {
    apiKey: "AIzaSyCpvXqHwQ0Vqd5Sju18gWbzJ2HDx9USeO4",
    authDomain: "kwitter-235b7.firebaseapp.com",
    databaseURL: "https://kwitter-235b7-default-rtdb.firebaseio.com",
    projectId: "kwitter-235b7",
    storageBucket: "kwitter-235b7.appspot.com",
    messagingSenderId: "554967398132",
    appId: "1:554967398132:web:8b15261ce705e4038f10a1",
    measurementId: "G-X3PNF9DTXC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
