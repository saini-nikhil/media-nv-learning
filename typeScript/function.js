function abcd(a, b) {
    return a + b;
}
console.log(abcd(10, 20));
function xyz(name, age, cb) {
    cb("hi");
    console.log(name, age);
}
xyz("nik", 23, function (arg) {
    console.log(arg);
});
function pqrs(name, age, gender) {
    console.log(name, gender, age);
}
pqrs("nik", 23, "male");
pqrs("xyz", 25);
function abcde(name, age, gender) {
    if (gender === void 0) { gender = "cant be define"; }
    console.log(name, gender, age);
}
abcde("nik", 23, "male");
abcde("xyz", 25);
// rest operator  
function foo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
foo(10, 20, 30, 40, 50);
