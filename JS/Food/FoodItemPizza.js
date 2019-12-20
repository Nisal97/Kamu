var foodList = {
    "pizza1": {
        "id": "pizza1",
        "no": 119,
        "name": "Chicken Bacon",
        "imageUrl": "../../../../ImageAssets/Foods/Pizza/chickenbaconPizza.jpg",
        "description": "Topped with succulent prawns with pieces of chicken bacon, accompanied by spring onions, sun-ripened tomatoes infused with exotic herbs, green chillies and jalapenos, blanketed by mozzarella cheese."
    },
    "pizza2": {
        "id": "pizza2",
        "no": 120,
        "name": "Devilled Beef",
        "imageUrl": "../../../../ImageAssets/Foods/Pizza/devilledbeefPizza.jpg",
        "description": "A delightfully crust pizza, expertly hand-stretched and oven-baked to golden perfection with hot and spicy devilled beef complemented by fresh capsicums, and crunchy onions blanketed by mozzarella cheese."
    },
    "pizza3": {
        "id": "pizza3",
        "no": 121,
        "name": "Devilled Chicken",
        "imageUrl": "../../../../ImageAssets/Foods/Pizza/devilledchickenPizza.jpg",
        "description": "A combination of spicy chicken and kotchchi sausage meat with crunchy onions and jalapenos placed on a layer of cream cheese and a layer of mozzarella."
    },
    "pizza4": {
        "id": "pizza4",
        "no": 122,
        "name": "Hot Buffer Cuttle Fish",
        "imageUrl": "../../../../ImageAssets/Foods/Pizza/hotbuttercuttlefishPizza.jpg",
        "description": "Hot butter cuttlefish with chili flakes and butter accompanied by spring onion and capsicum with a double layer of mozzarella cheese."
    },
    "pizza5": {
        "id": "pizza5",
        "no": 123,
        "name": "Hot and Spicy Chicken",
        "imageUrl": "../../../../ImageAssets/Foods/Pizza/hotspicychickenPizza.jpg",
        "description": "Topped with tender Spicy chunks of BBQ chicken accompanied by spicy jalapenos, crunchy onions, kotchchi chicken sausage meat and chicken bacon and mozzarella cheese."
    },
    "pizza6": {
        "id": "pizza6",
        "no": 124,
        "name": "Sausage Delight",
        "imageUrl": "../../../../ImageAssets/Foods/Pizza/sausagedelightPizza.jpg",
        "description": "A flavourful fusion combining chicken sausages, chicken bacon and meatball mix garnished with crunchy onions and grilled red peppers, accompanied by delicious cranberry sauce, layered with mozzarella cheese."
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

    var list = document.getElementById("pizzaList");
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