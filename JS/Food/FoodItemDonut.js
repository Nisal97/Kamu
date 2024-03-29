var foodList = {
    "donut1": {
        "id": "donut1",
        "no": 101,
        "name": "Choconut",
        "imageUrl": "../../../../ImageAssets/Foods/Donuts/choconutDonut.png",
        "description": "These chocolate frosted donuts are baked, not fried and full of chocalates. Covered in a thick chocolate glaze, these are perfect for any chocoholic who wants a chocolate version of this classic treat."
    },
    "donut2": {
        "id": "donut2",
        "no": 102,
        "name": "Black Forest",
        "imageUrl": "../../../../ImageAssets/Foods/Donuts/blackforestDonut.png",
        "description": "Topped with a layer of whipped cream, and garnished with bits of cherry and chocolate shavings, the Black Forest is very delicious donut."
    },
    "donut3": {
        "id": "donut3",
        "no": 103,
        "name": "Butter Scotch Cookies",
        "imageUrl": "../../../../ImageAssets/Foods/Donuts/butterscotchcookiesDonut.png",
        "description": "Butterscotch donut is basically an explosion of butterscotch flavor, while the bits of crispy caramel on top added a nutty boost."
    },
    "donut4": {
        "id": "donut4",
        "no": 104,
        "name": "Glazed",
        "imageUrl": "../../../../ImageAssets/Foods/Donuts/glazedDonut.png",
        "description": "Glazed donut, which is basically a donut topped off with a lapyer of icing and sprinkles is ideal for a donut lover."
    },
    "donut5": {
        "id": "donut5",
        "no": 105,
        "name": "Chocolate Surprise",
        "imageUrl": "../../../../ImageAssets/Foods/Donuts/chocolatesurpriseDonut.png",
        "description": "The chocolate surprise was well stuffed with a surprising amount of lava-like melted chocolate that burst with flavors with each bite."
    },
    "donut6": {
        "id": "donut6",
        "no": 106,
        "name": "Sugar Rush",
        "imageUrl": "../../../../ImageAssets/Foods/Donuts/sugarrushDonut.png",
        "description": "Sugar Rush is a yummy donut which is garnished with sugar and dusted with sprinkles and slightly crispy exterior soft, puffy middle."
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

    var list = document.getElementById("donutList");
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