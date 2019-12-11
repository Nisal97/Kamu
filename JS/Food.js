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

function viewFoodItem() {
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
        '<h1 id="fonts">'+ item.name +'</h1>'+
        '<img class="foodList" id="chickenbaconPizza" src="'+ item.imageUrl +'" align="center">'+
    '</div>'+
    '<hr>'+
    item.description+
    '</div>';
}
