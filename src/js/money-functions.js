
function formatCurrency (amount){
    if(amount >= 0){
        n = amount.toFixed(2);
        money = `$${n}`;
    } else {
        n = amount * -1;
        n = n.toFixed(2);
        money = `-$${n}`;
    }
    
    return money;
};

const getCoins = function (cents) {
    let change = cents;
    let coins = {quarters: 0, dimes: 0, nickles: 0, pennies: 0};
    while(change > 0){
        if(change >= 25){
            change = change -25;
            coins.quarters ++;
        } else if (change >= 10){
            change = change - 10;
            coins.dimes ++;
        } else if (change >= 5){
            change = change - 5;
            coins.nickles ++;
        } else if (change >= 1){
            change = change - 1;
            coins.pennies ++;
        }
    }
    return coins;
};

module.exports = [formatCurrency, getCoins];