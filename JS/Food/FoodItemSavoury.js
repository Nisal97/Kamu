var foodList = {
    "savoury1": {
        "id": "savoury1",
        "no": 125,
        "name": "Cutlet",
        "imageUrl": "../../../../ImageAssets/Foods/Savoury/cutletSavoury.jpg",
        "description": "Made with chicken, all-purpose flour, egg, potato, carrot and a melange of spices. This quick snack can be served with green chutney or chilli sauce."
    },
    "savoury2": {
        "id": "savoury2",
        "no": 126,
        "name": "Pastry",
        "imageUrl": "../../../../ImageAssets/Foods/Savoury/pastrySavoury.jpg",
        "description": "Made with fried leek and chicken sausages, this delicious snack can be used with dip or sauce of your choice."
    },
    "savoury3": {
        "id": "savoury3",
        "no": 127,
        "name": "Roll",
        "imageUrl": "../../../../ImageAssets/Foods/Savoury/rollSavoury.jpg",
        "description": "These yummy delicious Rolls are so tempting that you would eat them in no time. This will be a flawless way to enjoy the rainy season."
    },
    "savoury4": {
        "id": "savoury4",
        "no": 128,
        "name": "Samosa",
        "imageUrl": "../../../../ImageAssets/Foods/Savoury/samosaSavoury.jpg",
        "description": "These Samosa is made with the tooth-some combination of cottage cheese, potato, lemon rind and eggs."
    },
    "savoury5": {
        "id": "savoury5",
        "no": 129,
        "name": "Patty",
        "imageUrl": "../../../../ImageAssets/Foods/Savoury/pattySavoury.jpg",
        "description": "Craving for lip-smacking patty that will leave your taste buds satisfied for long a time? If that's the case then, this is the perfect dish for you."
    },
    "savoury6": {
        "id": "savoury6",
        "no": 130,
        "name": "Vegetable Roti",
        "imageUrl": "../../../../ImageAssets/Foods/Savoury/vegetablerotiSavoury.jpg",
        "description": "Made using mixed vegetables and all purpose flour, this is a delectable food that would be loved by you!"
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

    var list = document.getElementById("savouryList");
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