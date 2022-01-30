// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDY69dBg8kmc42WJVsK13Ycs5YbHRjv_Vw",
      authDomain: "kwitter-2-364cb.firebaseapp.com",
      databaseURL: "https://kwitter-2-364cb-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-364cb",
      storageBucket: "kwitter-2-364cb.appspot.com",
      messagingSenderId: "340132239938",
      appId: "1:340132239938:web:d2d89b9bfe5136adf12bdb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addRoomName"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
       }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
