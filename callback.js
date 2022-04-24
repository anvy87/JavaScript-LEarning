function foo(bar) {
    bar();
}

foo(function() {
    console.log('bar')
});

// robin's phone
orderPizza('veg', 'Cheese', function(msg) {
    console.log(msg);
});

// pizzahub end
function orderPizza(type, name, callback) {
    console.log(`Pizza ${type} ${name} is ordered`);

    setTimeout(function() {
        const msg = `Pizza ${type} ${name} is ready`;
        callback(msg);
    }, 3000);
}