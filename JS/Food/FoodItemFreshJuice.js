var foodList = {
    "freshJuice1": {
        "id": "freshJuice1",
        "no": 113,
        "name": "Carrot Juice",
        "imageUrl": "../../../../ImageAssets/Foods/FreshJuice/carrotFreshJuice.jpg",
        "description": "Carrots add a great nutritional element and the delicate flavor is easily masked by or even complements many fruits."
    },
    "freshJuice2": {
        "id": "freshJuice2",
        "no": 114,
        "name": "Lime Juice",
        "imageUrl": "../../../../ImageAssets/Foods/FreshJuice/limeFreshJuice.jpg",
        "description": "Lime Juice is a refreshing drink that can double up as a delightful summer mocktail. Pair it up with cheese and roasted nuggets to make it more enjoyable."
    },
    "freshJuice3": {
        "id": "freshJuice3",
        "no": 115,
        "name": "Orange Juice",
        "imageUrl": "../../../../ImageAssets/Foods/FreshJuice/orangeFreshJuice.jpg",
        "description": "Orange Juice is a very healthy drink for summer days which made from fresh orange."
    },
    "freshJuice4": {
        "id": "freshJuice4",
        "no": 116,
        "name": "Papaya Juice",
        "imageUrl": "../../../../ImageAssets/Foods/FreshJuice/papayaFreshJuice.jpg",
        "description": "Papaya juice is a mix of chopped papaya and vanilla ice cream. Used fresh and tasty fruits with right sugar amount."
    },
    "freshJuice5": {
        "id": "freshJuice5",
        "no": 117,
        "name": "Pineapple Juice",
        "imageUrl": "../../../../ImageAssets/Foods/FreshJuice/pineappleFreshJuice.jpg",
        "description": "This is a juice mix of chopped pineapple topped with a bit of vanilla ice cream and a few sprinkles of colourful jelly bits. The fruits tasted good and seemed fresh while the sugar amount was just right."
    },
    "freshJuice6": {
        "id": "freshJuice6",
        "no": 118,
        "name": "Watermelon Juice",
        "imageUrl": "../../../../ImageAssets/Foods/FreshJuice/watermelonFreshJuice.jpg",
        "description": "The watermelon taste is rich with the thick texture produced by the fleshy watermelon bits and the colour of the drink is pleasing light red"
    }
}

var input = document.getElementById("searchInput");
if(input){
    console.log("searchInput is available");
    input.addEventListener("input", myFunction);
} else{
    console.log("searchInput is null");
}

function myFunction(e) {
    var filter = e.target.value.toUpperCase();
    console.log("Came to myFunction(e)");

    var list = document.getElementById("freshJuiceList");
    var divs = list.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        console.log("divs.length - "+ divs.length);
        var a = divs[i].getElementsByTagName("h3")[0];
        var b = divs[i].getElementsByTagName("h3")[1];
        if (a) {
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                divs[i].style.display = "";
            } else {
                divs[i].style.display = "none";
            }
        }
        if (b){
            if (a.innerHTML.toUpperCase().indexOf(filter) > -2) {
                divs[i].style.display = "";
            } else {
                divs[i].style.display = "none";
            }
        }
    }

}