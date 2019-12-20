var numberOfItemsTypes;

var itemArrayList = [];

var totalPrice = 0;

var retrievedCartItems = localStorage.getItem("cartItems");
var cartArray = JSON.parse(retrievedCartItems);
console.log("cartArray- " + cartArray);
console.log("cartArray[1]- " + cartArray[0]);

var newCartArray = cartArray.slice(0);
localStorage.setItem("checkoutItems", JSON.stringify(newCartArray));

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

        // var x = document.createElement("div");
        // x.setAttribute("id", "div" + itemNumber);
        // x.setAttribute("style", "display: inline-block");


            var y = document.createElement("INPUT");
            y.setAttribute("type", "checkbox");
            y.setAttribute("name", "foodItem");
            y.setAttribute("id", "box" + itemNumber);
            y.setAttribute("value", "item" + itemNumber);
            y.setAttribute("checked", "checked");
            y.setAttribute("onclick", "checkboxTest("+ itemNumber +","+ itemQuantity +")");
            y.setAttribute("data-role", "none");

            // document.getElementById("div" + itemNumber).appendChild(x);
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

        if (document.getElementById("box" + itemNumber).checked) {
            var itemTotalPrice = getItemTotal(itemNumber, itemQuantity);
            totalPrice += itemTotalPrice;
        }
    }

}

function checkboxTest(itemNumber, itemQuantity) {
    console.log("itemNumber - " + itemNumber);

    console.log("newCartArray - " + newCartArray);
    console.log("numOfLines - " + itemNumber);
    console.log("cartArray - " + cartArray);

        if (document.getElementById("box" + itemNumber).checked) {
            totalPrice += getItemTotal(itemNumber, itemQuantity);
            document.getElementById("totalAmountLabel").innerHTML = "Total : " + totalPrice;

            console.log("cartArray.length - " + cartArray.length);
            for (var itemCheck = 0; itemCheck < cartArray.length; itemCheck++) {
                var eachItem = cartArray[itemCheck].toString().split(",");
                console.log("itemNumber - " + itemNumber);
                console.log("eachItem[0] - " + eachItem[0]);
                if(itemNumber == eachItem[0]){
                    newCartArray.push(itemNumber + "," + itemQuantity);
                    console.log("newCartArray - " + newCartArray);
                    console.log("cartArray - " + cartArray);
                }
            }
            localStorage.setItem("checkoutItems", JSON.stringify(newCartArray));

        } else {
            totalPrice -= getItemTotal(itemNumber, itemQuantity);
            document.getElementById("totalAmountLabel").innerHTML = "Total : " + totalPrice;

            console.log("cartArray.length - " + cartArray.length);
            for (var itemCheck = 0; itemCheck < cartArray.length; itemCheck++) {
                var eachItem = cartArray[itemCheck].toString().split(",");
                console.log("itemNumber - " + itemNumber);
                console.log("eachItem[0] - " + eachItem[0]);
                if(itemNumber == eachItem[0]){
                    newCartArray.splice(itemCheck, 1);
                    console.log("newCartArray - " + newCartArray);
                    console.log("cartArray - " + cartArray);
                }
            }
            localStorage.setItem("checkoutItems", JSON.stringify(newCartArray));

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




