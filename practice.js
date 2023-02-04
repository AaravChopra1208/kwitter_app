var firebaseConfig = {
    apiKey: "AIzaSyDC3LVccC46OuysUWCa_b2_enKmLjxe6JQ",
    authDomain: "kwitter-39050.firebaseapp.com",
    databaseURL: "https://kwitter-39050-default-rtdb.firebaseio.com",
    projectId: "kwitter-39050",
    storageBucket: "kwitter-39050.appspot.com",
    messagingSenderId: "207096585185",
    appId: "1:207096585185:web:eb4296fc41041482fb10a0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function Adduser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding_user"
});

}