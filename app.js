//for login screen    
$("#loginBtn").click( function(e){
   //get email and pass
    const email = $("#userName").val();

    const pass = $("password").text.toLocaleString();
        
    const auth=firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e=>console.log(e.message));
    window.alert("user successfully signed in.proceed to enter the vitals");
    //if the user is present it would login else it would catch the exception and log it t0 the console
});
$("#signupBtn").click(function(e){
    var email = $("#userName").val();

    var pass = $("password").text.toLocaleString();
        
    const auth=firebase.auth();
    //sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e=>console.log(e.message));
});
/*$("#logoutBtn").click(function(){
   firebase.auth().signOut().then(function() {
  // Sign-out successful.
       console.log("user signed out");
}, function(error) {
  // An error happened.
}); 
});*/
//real time listener
firebase.auth().onAuthStateChanged(firebaseuser=>{
   
    //if we are logged in then the parameter firebaseuser would be populated with 
    //the login details and it would have null value if we are not loggen in
    //also we have not validated the user till yet whether he is writing correct data or not
    
        if (firebaseuser){
        console.log(firebaseuser);
        console.log("signed up");
    }
    else{
        console.log("not logged in");
    }
    
   
    
});
