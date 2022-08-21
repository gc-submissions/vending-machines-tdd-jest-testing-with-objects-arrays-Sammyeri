 function calculateChange (total, payment){
    return change = parseFloat((payment - total).toFixed(2));
};

const isSufficientPayment = function(total, payment){
    return  total <= payment ? true : false;
};

const calculateTotal = function(itemsArray){
    let total = 0;
    for(item of itemsArray){
        total += item.price;
    }
    
    return total = parseFloat(total.toFixed(2));
};

const addItem = function (itemsArray, name, price){
    itemsArray.push({name: name, price: price});
    return itemsArray;
};

const removeItem = function(itemsArray, index){
    itemsArray.splice(index, 1);
};

module.exports = [calculateChange , isSufficientPayment, calculateTotal, addItem, removeItem];
