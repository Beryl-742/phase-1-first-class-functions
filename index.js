// receivesAFunction
function receivesAFunction(callback) {
    callback();
}
// returnsANamedFunction
function returnsANamedFunction() {
    function namedFunction() {
        return "I'm a named fuction";
    }
    return namedFunction;
}
// returnsAnonymousFunction
function returnsAnAnonymousFunction() {
    return function() {
        return "I'm anonymous";
    };
}