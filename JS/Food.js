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

function populateModel(){
// Get the modal
var modal = document.getElementById("myModal");
                
// Get the button that opens the modal
var btn = document.getElementById("shareBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
