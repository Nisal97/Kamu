var foodList = {
    "soup1": {
        "id": "soup1",
        "no": 131,
        "name": "Crab Soup",
        "imageUrl": "../../../../ImageAssets/Foods/Soup/crabSoup.jpeg",
        "description": "Creamy Crab and Corn Soup is a mouth-watering soup recipe which is best suited for winter season because it keeps you warm from inside."
    },
    "soup2": {
        "id": "soup2",
        "no": 132,
        "name": "Diced Chicken Soup",
        "imageUrl": "../../../../ImageAssets/Foods/Soup/dicedchickenSoup.jpeg",
        "description": "Diced Chicken Soup is prepared with boneless chicken, mushrooms, fresh herbs, spices and heavy cream enhance the taste of this amazing soup."
    },
    "soup3": {
        "id": "soup3",
        "no": 133,
        "name": "Prawn Soup",
        "imageUrl": "../../../../ImageAssets/Foods/Soup/prawnSoup.jpeg",
        "description": "Prawn Soup is a healthy soup made with the goodness of prawns, coconut milk and cumin powder this lip-smacking recipe tastes absolutely delightful."
    },
    "soup4": {
        "id": "soup4",
        "no": 134,
        "name": "Sea Food Soup",
        "imageUrl": "../../../../ImageAssets/Foods/Soup/seafoodSoup.jpeg",
        "description": "Sea Food Soup is best suited for chilly winter evenings and tastes best when served with garlic breads. This offers the best flavors with the healthiness of protein rich sea food."
    },
    "soup5": {
        "id": "soup5",
        "no": 135,
        "name": "Sweet Corn Soup",
        "imageUrl": "../../../../ImageAssets/Foods/Soup/sweetcornSoup.jpeg",
        "description": "Sweet Corn Soup, which is amazingly delicious and is prepared with corn powder, cauliflower, processed cheese, all purpose flour with a hint of nutmeg powder to increase its taste."
    },
    "soup6": {
        "id": "soup6",
        "no": 136,
        "name": "Vegetable Sour Soup",
        "imageUrl": "../../../../ImageAssets/Foods/Soup/vegetablehotandsourSoup.jpeg",
        "description": "Prepared using basic ingredients like onions, potatoes, carrot, veg stock and garnished with herbs like parsley and celery. This soup recipe has lip-smacking flavours and creamy textures."
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

    var list = document.getElementById("soupList");
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