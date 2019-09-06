 //var messageRef = firebase.database().ref('message');
 
 
 
 var Ref = firebase.database().ref('medcap');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }
  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  
}

function register(){
  var newemail=document.getElementById('new_email').value;
  var newpassword=document.getElementById('new_password').value;
  var newname=document.getElementById('new_name').value;
  
  firebase.auth().createUserWithEmailAndPassword(newemail, newpassword).then(cred => {
    console.log(cred.user);
    console.log(newname);
    
  });
}
//save msg


//Save message to firebase
function saveMessage(newname,newemail,newpassword){
  var newmessageRef = Ref.push();
  newmessageRef.set({
    name: newname,
    email:newemail,
    password:newpassword,
    
  });
}