var numberOfItemsTypes;

var itemNameArray;
var itemPriceArray;
var itemQuantityArray;

var itemName;
var itemPrice;
var itemQuantity;

var totalPrice = 0;

itemNameArray = ["Cheese Pizza", "Chocolate Donut", "Chicken Submarine", "Cream Pasta"];
itemPriceArray = [1000, 100, 500, 300];
itemQuantityArray = [1, 3, 2, 1];


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
            y.setAttribute("checked", "checked");
            y.setAttribute("onclick", "checkboxTest("+ numOfLines +")");

            document.getElementById("appendCheckList").appendChild(y);
            document.getElementById("appendCheckList").appendChild(document.createTextNode(" "+
                itemQuantityArray[numOfLines] + " " +itemNameArray[numOfLines]));
            document.getElementById("appendCheckList").appendChild(document.createElement("br"));

            // totalPrice += itemPriceArray[numOfLines];



    }
    calculateTotal();
    document.getElementById("totalAmountLabel").innerHTML = "Total : " + totalPrice;
}

function calculateTotal() {

    for(numOfLines = 0; numOfLines<numberOfItemsTypes; numOfLines++){
        if (document.getElementById('box' + numOfLines).checked) {
            totalPrice += (itemPriceArray[numOfLines])*itemQuantityArray[numOfLines];
        } else {
            // totalPrice -= itemPriceArray[numOfLines];
        }
    }

}

function checkboxTest(numOfLines) {
        if (document.getElementById('box' + numOfLines).checked) {
            totalPrice += (itemPriceArray[numOfLines])*itemQuantityArray[numOfLines];
            document.getElementById("totalAmountLabel").innerHTML = "Total : " + totalPrice;
        } else {
            totalPrice -= (itemPriceArray[numOfLines])*itemQuantityArray[numOfLines];
            document.getElementById("totalAmountLabel").innerHTML = "Total : " + totalPrice;
        }

}


// readTextFile("file:////Users/charana/Documents/Projects/Kamu/textFiles/testFile.txt");
readTextFile("../FileAssets/testFile.txt");

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {

        if(rawFile.readyState === 4) {
            console.log("Ready state 4");
            if(rawFile.status === 200 || rawFile.status == 0) {
                console.log("Raw File state 200");
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}


