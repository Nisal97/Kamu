function signOut() {
    firebase.auth().signOut().then(function (value) {
        var errorMessage = value.message;
        console.log(errorMessage);
        window.location.href = "Home.html";
    }).catch(function (error) {
        var errorMessage = error.message;
        console.log(errorMessage);
    })
}

function signOutFromBuyer() {
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
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    signOut();
}

function signOutFromSeller() {
    var firebaseConfig1 = {
        apiKey: "AIzaSyBaZxRtfQlbtYH7BI0aR0Qd6kPaSeGqcbI",
        authDomain: "kamu-001.firebaseapp.com",
        databaseURL: "https://kamu-001.firebaseio.com",
        projectId: "kamu-001",
        storageBucket: "kamu-001.appspot.com",
        messagingSenderId: "95423498026",
        appId: "1:95423498026:web:0d26fa56770e27625d8053",
        measurementId: "G-RFV4W6PV60"
    };
    firebase.initializeApp(firebaseConfig1);
    firebase.analytics();
    signOut();
}

function signOutAllPages() {
    try{
        signOutFromBuyer();
    }catch (error) {
        signOutFromSeller()
    }
}

