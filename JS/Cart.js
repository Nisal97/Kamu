var numberOfItemsTypes;

var itemNameArray;
var itemPriceArray;
var itemQuantityArray;

var itemArrayList = [];

var totalPrice = 0;

itemNameArray = ["Cheese Pizza", "Chocolate Donut", "Chicken Submarine", "Cream Pasta"];
itemPriceArray = [1000, 100, 500, 300];
itemQuantityArray = [1, 3, 2, 1];

// var cartArray = ["101,1", "103,2", "102,4"];

var retrievedCarttItems = localStorage.getItem("cartItems");
var cartArray = JSON.parse(retrievedCarttItems);

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

        var item = cartArray[numOfLines].split(",");

        var itemNumber = item[0];
        console.log("itemNumber - " + itemNumber);
        var itemQuantity = item[1];
        var itemName = getItemName(itemNumber);
        console.log("itemName - " + itemName);
        var itemTotalPrice = getItemTotal(itemNumber, itemQuantity);
        console.log("itemTotalPrice - " + itemTotalPrice);


            var y = document.createElement("INPUT");
            y.setAttribute("type", "checkbox");
            y.setAttribute("name", "foodItem");
            y.setAttribute("id", "box" + itemNumber);
            y.setAttribute("value", "item" + itemNumber);
            y.setAttribute("checked", "checked");
            y.setAttribute("onclick", "checkboxTest("+ itemNumber +","+ itemQuantity +")");

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
        var item = cartArray[numOfLines].split(",");
        var itemNumber = item[0];
        var itemQuantity = item[1];

        if (document.getElementById("box" + itemNumber).checked) {
            var itemTotalPrice = getItemTotal(itemNumber, itemQuantity);
            totalPrice += itemTotalPrice;
        }
    }

}

function checkboxTest(itemNumber, itemQuantity) {
    console.log("numOfLines - " + itemNumber);

        if (document.getElementById("box" + itemNumber).checked) {
            totalPrice += getItemTotal(itemNumber, itemQuantity);
            document.getElementById("totalAmountLabel").innerHTML = "Total : " + totalPrice;
        } else {
            totalPrice -= getItemTotal(itemNumber, itemQuantity);
            document.getElementById("totalAmountLabel").innerHTML = "Total : " + totalPrice;
        }

}

function clearCart() {
    // cartArray = [];
    // console.log("cartArray - " + cartArray);

    var cartItems = [];
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    location.reload();

}

function setCart() {
    // sessionStorage.setItem("cartItems", "[]");
    // // cartArray = [];
    // console.log("cartArray - " + cartArray);


    var cartItems = ["101,1", "103,2", "102,4"];
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    location.reload();
}




