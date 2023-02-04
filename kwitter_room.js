var firebaseConfig = {
      apiKey: "AIzaSyD3h9zohJMjBe2lYwGNNGGhocZs9Ly0D9I",
      authDomain: "kwitter-7d586.firebaseapp.com",
      databaseURL: "https://kwitter-7d586-default-rtdb.firebaseio.com",
      projectId: "kwitter-7d586",
      storageBucket: "kwitter-7d586.appspot.com",
      messagingSenderId: "132843233190",
      appId: "1:132843233190:web:05334e80cd2add482e3967"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById(user_name).innerHTML="Welcome"+user_name+"!";
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.HTML";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_names -"+room_name);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}