var firebaseConfig = {
    apiKey: "AIzaSyA2u_is25sTED0wh6GdBOjPOtdhxcLwvT4",
    authDomain: "kamu-buyer.firebaseapp.com",
    databaseURL: "https://kamu-buyer.firebaseio.com",
    projectId: "kamu-buyer",
    storageBucket: "kamu-buyer.appspot.com",
    messagingSenderId: "1045811834528",
    appId: "1:1045811834528:web:8cead94dbfd6bb7e1ca3c5",
    measurementId: "G-724KR1YZB5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function buyerSignUpAuthentication() {
    var email= document.getElementById("buyerSignUpEmailInput").value;
    var password= document.getElementById("BuyerSignUpPasswordInput").value;
    var retypePassword = document.getElementById("BuyerSignUpRetypePassword").value;

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


function buyerSignInAuthentication(){

    var email= document.getElementById("buyerSignInUserName").value;
    var password= document.getElementById("buyerSignInPassword").value;

    console.log(email);
    console.log(password);

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