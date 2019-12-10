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
    document.getElementById(getItem()).hidden = false;
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
