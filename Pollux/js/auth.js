  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCHiYDxPf_ShRVsEIcc9_edphiPaDaU5q0",
    authDomain: "wordpad-46016.firebaseapp.com",
    projectId: "wordpad-46016",
    storageBucket: "wordpad-46016.appspot.com",
    messagingSenderId: "668400414476",
    appId: "1:668400414476:web:e6c0af264657227f296329",
    measurementId: "G-TCBFR1W0L9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth();

  //New SignUp
  document.getElementById("register").addEventListener("click", function() {
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //For new registration
    createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Registered successfully!!");
      document.getElementById("test").style.display="none";
      document.getElementById("psignup").classList.remove("form-post");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });		  		  
});
  

    //Login
    document.getElementById("logged").addEventListener("click", function() {
        var email =  document.getElementById("login_email").value;
        var password = document.getElementById("login_password").value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // alert(user.email+" Logged In!!!");
          
          // document.getElementById("logged").style.display="none";
          
          alert(user.email+" Logged In!!!");
          document.getElementById("logged").style.display="none";
          document.getElementById('logout').style.display ='block';
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage);
        });		  		  
    });

    //logout
    document.getElementById("logout").addEventListener("click", function() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');
            alert('Sign-out successful.');
            document.getElementById('logout').style.display = 'none';
            document.getElementById('logged').style.display ='block';
          }).catch((error) => {
            // An error happened.
            console.log('An error happened.');
          });		  		  
    });

  //console.log(app);