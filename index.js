function receivesAFunction (yep) {
    return yep();
}

receivesAFunction (function() {return "yep"});

function returnsANamedFunction () {
    let fn = returnsANamedFunction;
    return fn
}



function returnsAnAnonymousFunction () {
    return function(){

    }
}