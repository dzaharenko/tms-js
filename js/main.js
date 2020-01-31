function dawn(input)
{
    input.value = input.value != 'Add to Basket' ?  'Add to Basket' : 'Remove from Basket'
}

function clk() {
    document.getElementById('demo').value = 'Remove from Basket';
}


products.sort(function(a, b){
    return b.price.value - a.price.value
});
console.log(products);