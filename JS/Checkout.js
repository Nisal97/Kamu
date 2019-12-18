var numberOfItemsTypes;

var itemArrayList = [];

var totalPrice = 0;

var retrievedCartItems = localStorage.getItem("checkoutItems");
var cartArray = JSON.parse(retrievedCartItems);
console.log("cartArray- " + cartArray);
console.log("cartArray[1]- " + cartArray[0]);

readTextFile("../../FileAssets/testFile.txt");

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {


        if(rawFile.readyState === 4) {
            console.log("Ready state 4");
            if(rawFile.status === 200 || rawFile.status == 0) {
                console.log("Raw File state 200");
                var allText = rawFile.responseText;
                var textByLine = allText.split("\n");

                for (var itemNumber = 0; itemNumber < textByLine.length; itemNumber++ ){
                    var eachItemList = textByLine[itemNumber].split(",");
                    itemArrayList.push(eachItemList);
                }
                console.log("itemArrayList size- " + itemArrayList.length);
                console.log("itemArrayList - " + itemArrayList.toString());
                console.log("itemArrayList 2nd element - " + itemArrayList[1]);
                console.log("itemArrayList 2-2 element - " + itemArrayList[1][1]);
            }
        }
    }
    rawFile.send(null);
}

function getItemName(itemNumber){
    for(var item = 0; item < itemArrayList.length; item++ ){
        if (itemNumber == itemArrayList[item][0]){
            return itemArrayList[item][1];
        }
    }

}

function getItemTotal(itemNumber, quantity){
    for(var item = 0; item < itemArrayList.length; item++ ){
        if (itemNumber == itemArrayList[item][0]){
            return itemArrayList[item][2]*quantity;
        }
    }
}



numberOfItemsTypes = cartArray.length;

foodItemsList(numberOfItemsTypes);

function foodItemsList(typeCount) {

    for(numOfLines = 0; numOfLines<typeCount; numOfLines++){

        console.log("cartArray[numOfLines] - " + cartArray[numOfLines]);
        var item = (cartArray[numOfLines]).toString().split(",");

        var itemNumber = item[0];
        console.log("itemNumber - " + itemNumber);
        var itemQuantity = item[1];
        var itemName = getItemName(itemNumber);
        console.log("itemName - " + itemName);
        var itemTotalPrice = getItemTotal(itemNumber, itemQuantity);
        console.log("itemTotalPrice - " + itemTotalPrice);


        var y = document.createElement("TEXT");

        document.getElementById("appendCheckList").appendChild(y);
        document.getElementById("appendCheckList").appendChild(document.createTextNode(" "+
            itemQuantity + " " + itemName));
        document.getElementById("appendCheckList").appendChild(document.createElement("br"));
    }
    calculateTotal();
    document.getElementById("totalAmountLabel").innerHTML = "Total : " + totalPrice;
}

function calculateTotal() {

    for(numOfLines = 0; numOfLines<numberOfItemsTypes; numOfLines++){
        var item = cartArray[numOfLines].toString().split(",");
        var itemNumber = item[0];
        var itemQuantity = item[1];

            var itemTotalPrice = getItemTotal(itemNumber, itemQuantity);
            totalPrice += itemTotalPrice;
    }

}

function clearCart() {
    var cartItems = [];
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    location.reload();

}

function setCart() {
    var cartItems = ["101,1", "103,2", "102,4"];
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    location.reload();
}




