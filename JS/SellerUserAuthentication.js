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
    var sellerUserName = document.getElementById("sellerSignUpUsernameInput").value.toString();
    var sellerUserRef = firebase.database().ref(sellerUserName);

    sellerUserRef.push({
        entry:{
            username: document.getElementById("sellerSignUpUsernameInput").value,
            sellerEmail: document.getElementById("sellerSignUpEmailInput").value,
            sellerNumber: document.getElementById("sellerSignUpNumberInput").value,
        }
    });
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
        });
    }else{
        window.alert("Passwords should be match to proceed");
    }

}

function signInAuthentication(){

    var email= document.getElementById("sellerSignInUserNameInput").value;
    var password= document.getElementById("sellerSignInPasswordInput").value;

    console.log(email);
    console.log(password);

    /*firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        var errorMessage = error.message;
        console.log(errorMessage);
        window.location.href = "SellerRequestForm.html";
    });*/

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            window.location.href = "SellerRequestForm.html";
        })
        .catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}