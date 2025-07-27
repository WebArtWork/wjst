const iterateFilter = require("./iterateFilter");

module.exports = function capitalize(input) {
    var out = iterateFilter.apply(capitalize, arguments);
    if (out !== undefined) {
        return out;
    }

    return (
        input.toString().charAt(0).toUpperCase() +
        input.toString().substr(1).toLowerCase()
    );
};
