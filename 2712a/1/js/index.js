function min(a, b) {
    console.log(arguments);
    if (a <= b) {
        return a;
    }
    else {
        return b;
    }

}

console.log(min(10, 20, 5, 0, 15));

function max(a, b) {
    if (b > a) {
        return b;
    }
    else {
        return a;
    }
}
console.log(max(10, 20));

function selfCount() {
    var counter = 0;

    function countIncrement() {
        counter++;
        console.log(counter);
    }
    return countIncrement;
}
var myFun = selfCount();
var myFun2 = selfCount();
myFun();
myFun2();
myFun2();
myFun2();