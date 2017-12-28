function min() {

    var a = arguments[0];

    for (var i = 1; i < arguments.length; i++) {

        var b = arguments[i];
        if (b < a) a = b;
    }
    return a;
}

console.log(min(-1, 3, 5, 2, -5));

function max() {

    var a = arguments[0];

    for (var i = 1; i < arguments.length; i++) {

        var b = arguments[i];
        if (b > a) a = b;
    }
    return a;
}

console.log(max(-1, 3, 5, 2, -5));