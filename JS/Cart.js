var numberOfItemsTypes;
var numberOfItems;

var priceCheesePizza = 1000;
var priceChocolateDonut = 100;
var priceChickenSub = 500;
var pricePasta = 300;


// readTextFile("file:////Users/charana/Documents/Projects/Kamu/textFiles/testFile.txt");

// function myFunction() {
//     document.getElementById("hilbl").innerHTML = "Bye";
// }

// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

numberOfItemsTypes = 4;

foodItemsList(numberOfItemsTypes);

function foodItemsList(typeCount) {

    // var y = document.createElement("INPUT");

    for(numOfLines = 0; numOfLines<typeCount; numOfLines++){

            var y = document.createElement("INPUT");
            y.setAttribute("type", "checkbox");
            y.setAttribute("name", "foodItem");
            y.setAttribute("id", "box" + numOfLines);
            y.setAttribute("value", "item" + numOfLines);

            document.getElementById("appendCheckList").appendChild(y);
            document.getElementById("appendCheckList").appendChild(document.createTextNode(" 2 Pizza"));
            document.getElementById("appendCheckList").appendChild(document.createElement("br"));


    }

}


