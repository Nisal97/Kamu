var itemQuantity = 1;

function getItemCount() {
    var countElement = document.getElementById('count');

    itemQuantity = parseInt(countElement.value);
    console.log("itemQuantity - " + itemQuantity);
    return parseInt(countElement.value);
}

function setItemCount(newCount) {
    var countElement = document.getElementById('count');
    countElement.value = newCount;
}

function getItem() {
    var param = parent.document.URL.substring(parent.document.URL.indexOf('?') + 1, parent.document.URL.length);
    var item = param.substring("var=pizza1".indexOf('=') + 1);
    return item;
}

function getUrl() {
    var params = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);

}
function viewFoodItem() {
    bindModalEvents();
    var itemId = getItem();
    if(typeof foodList == 'undefined') {
        document.getElementById(itemId).hidden = false;
    }
    else {
        var item = foodList[itemId];
        // console.log('item = ', item);
        populateItems(item);
    }
}

function increaseItemCount() {
    var count = getItemCount();
    setItemCount(count+1);

    console.log("[item, count] = [" + getItem() + ", " + getItemCount() + "]");
}

function decreaseItemCount() {
    var count = getItemCount();
    setItemCount(count-1);

    console.log("[item, count] = [" + getItem() + ", " + getItemCount() + "]");

}

function populateItems(item) {
    var foodItemPizzaPage = document.getElementById("foodItem");
    foodItemPizzaPage.innerHTML = '<div id="'+ item.id+'">'+
    "<div>" +
        '<img class="foodItem" id="chickenbaconPizza" src="'+ item.imageUrl +'" align="center">'+
    '</div>'+
    '<hr class="line">'+
        '<p id="foodItemDes">'+
 item.description+'</p>'+
    '</div>';

    var header = document.getElementById('header-food-item');
    var elementItemName = document.createElement('div');
    elementItemName.innerHTML = '<p id="foodItemTopic"><b>'+ item.name +'</b></p>';

    header.appendChild(elementItemName);
}

// Modal
function bindModalEvents() {
    $(document).ready(function () {
        $('#shareModal').on($.modal.OPEN, function (event, modal) {
            $('#item-url').html(parent.document.URL);
        });

        $('#qr-modal').on($.modal.BEFORE_CLOSE, function (event, modal) {
            document.getElementById('qrcode').innerHTML = '';
        });
    });
}

function openModal() {
    gen();
    $('#qr-modal').modal({
        closeExisting: false
    });
}

function gen() {
    $('#qrcode').qrcode(parent.document.URL);
}

function openShareModal() {
    $('#shareModal').modal();
}

function addToCart(itemCode) {

    if (itemQuantity > 0) {

        var newCartArray;
        var isExistingItem = false;

        var retrievedCartItems = localStorage.getItem("cartItems");
        var retrievedCartArray = JSON.parse(retrievedCartItems);
        console.log("retrievedCartArray - " + retrievedCartArray);

        console.log("retrievedCartArray index 1 - " + retrievedCartArray[0]);
        console.log("retrievedCartArray length - " + retrievedCartArray.length);

        // if(retrievedCartArray.length != null) {
            for (var itemCheck = 0; itemCheck < retrievedCartArray.length; itemCheck++) {
                    console.log("came to not null");
                    var eachItem = retrievedCartArray[itemCheck].split(",");
                    console.log("eachItem[0] - " + eachItem[0]);
                    if (eachItem[0] == itemCode) {
                        eachItem[1] = parseInt(eachItem[1]) + itemQuantity;
                        console.log("eachItem[1] - " + eachItem[1]);
                        retrievedCartArray[itemCheck] = [eachItem[0] +","+ eachItem[1]];
                        console.log("retrievedCartArray - " + retrievedCartArray);
                        isExistingItem = true;
                        }
                    // } else {
                    //     newCartArray = [itemCode + "," + itemQuantity];
                    // }
            }

                // if (retrievedCartArray.length == 0) {
                //     console.log("came to null");

        if(isExistingItem == false){
            newCartArray = [itemCode + "," + itemQuantity];
            console.log("newCartArray - " + newCartArray);
        }
                    // newCartArray = [itemCode + "," + itemQuantity];
                    // console.log("newCartArray - " + newCartArray);
                // }


        // }

        // var newCartArray = [itemCode + "," + itemQuantity];

        // newCartArray = [itemCode + "," + itemQuantity];
        // console.log("cartItems - " + newCartArray);

        // console.log("final eachItem[1] - " + eachItem[1]);

        console.log("retrievedCartArray - " + retrievedCartArray);
        console.log("newCartArray - " + newCartArray);
        var cartArray;
        if((newCartArray != undefined) || (newCartArray != null)){
            cartArray = retrievedCartArray.concat(newCartArray);
        } else {
            cartArray = retrievedCartArray;
        }
        console.log("cartArray - " + cartArray);
        localStorage.setItem("cartItems", JSON.stringify(cartArray));

    }
}
