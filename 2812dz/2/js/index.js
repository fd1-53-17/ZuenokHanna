var str = prompt('Enter your text');
    str = str.toLowerCase().split(" ").join("").split(",").join("").split(".").join("").split("-").join("");
if (str == str.split("").reverse().join("")) {
    alert("It's palindrom");
}
else {
    alert("It's not palindrom");
}