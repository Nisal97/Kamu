function getItemCount() {
    var countElement = document.getElementById('count');

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
