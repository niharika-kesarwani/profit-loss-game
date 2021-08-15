var stockPrice = document.querySelector('#stock-price');
var stockQty = document.querySelector('#stock-qty');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var result = document.querySelector('#result');

submitBtn.addEventListener('click', handleSubmit);

function handleSubmit() {
    var sp = Number(stockPrice.value);
    var qty = Number(stockQty.value);
    var curr = Number(currentPrice.value);
    calculateProfitLoss(sp, qty, curr);
}

function calculateProfitLoss(price, quantity, current) {
    if (price < current) {
        calculate(price, current, quantity, 0);
    } else if (price > current) {
        calculate(price, current, quantity, 1);
    } else {
        calculate(current, price, quantity, 2);
    }
}

function calculate(price, current, quantity, status) {
    var temp = (status === 0) ? ((current - price) * quantity) : ((price - current) * quantity);
    var per = temp / price * 100;
    switch (status) {
        case 0:
            displayInfo("Profit", temp.toFixed(2), per.toFixed(2));
            break;
        case 1:
            displayInfo("Loss", temp.toFixed(2), per.toFixed(2));
            break;
        case 2:
            errorInfo("No Profit No Loss !!");
            break;
        default:
            errorInfo("Invalid status");
            break;
    }
}

function displayInfo(txt, val1, val2){
    result.innerHTML= txt+ " is " + val1 + " and " + txt.toLowerCase() + " percentage is " + val2 + "%";
}

function errorInfo(text){
    result.innerHTML = text;
}