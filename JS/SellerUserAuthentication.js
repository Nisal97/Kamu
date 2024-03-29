// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBaZxRtfQlbtYH7BI0aR0Qd6kPaSeGqcbI",
    authDomain: "kamu-001.firebaseapp.com",
    databaseURL: "https://kamu-001.firebaseio.com",
    projectId: "kamu-001",
    storageBucket: "kamu-001.appspot.com",
    messagingSenderId: "95423498026",
    appId: "1:95423498026:web:0d26fa56770e27625d8053",
    measurementId: "G-RFV4W6PV60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function submitSellerSignUpData() {
    var sellerUserName = document.getElementById("sellerSignUpUsernameInput").value;
    var sellerUserRef = firebase.database().ref(sellerUserName);
    console.log("submit about to start");

    sellerUserRef.set({
        details:{
            username: document.getElementById("sellerSignUpUsernameInput").value,
            sellerEmail: document.getElementById("sellerSignUpEmailInput").value,
            sellerNumber: document.getElementById("sellerSignUpNumberInput").value
        }
    });
    console.log("submit done");
}

function signUpAuthentication() {
    var email= document.getElementById("sellerSignUpEmailInput").value;
    var password= document.getElementById("sellerSignUpPasswordInput").value;
    var retypePassword = document.getElementById("sellerRetypePasswordInput").value;

    if (retypePassword === password){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(error){
            var errorMessage = error.message;
            console.log(errorMessage);
            window.location.href = "SellerRequestForm.html";
        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            sessionStorage.setItem("errorM", "Invalid credentials. Please check again.");
            $('.overlay2').show();
        });
    }else{
        sessionStorage.setItem("errorM", "Invalid credentials. Please check again.");
        $('.overlay2').show();
    }

}

function signInAuthentication(){

    var email= document.getElementById("sellerSignInUserNameInput").value;
    var password= document.getElementById("sellerSignInPasswordInput").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            window.location.href = "SellerRequestForm.html";
        })
        .catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            sessionStorage.setItem("errorM", "Invalid credentials. Please check again.");
            console.log("errorM - " + sessionStorage.getItem("errorM"));
            $('.overlay1').show();

        });
}

function signOutFromSeller() {
    firebase.auth().signOut().then(function(error) {
        var errorMessage = error.message;
        console.log(errorMessage);
        window.location.href = "Home.html";
    })
        .catch(function (reason) {
            var errorMessage = reason.message;
            console.log(errorMessage);
            sessionStorage.setItem("errorM", errorMessage);
            // $('.overlay1').show();
        })
}
