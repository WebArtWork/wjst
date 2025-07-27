const iterateFilter = require("./iterateFilter");

module.exports = function upper(input) {
    var out = iterateFilter.apply(upper, arguments);
    if (out !== undefined) {
        return out;
    }

    return input.toString().toUpperCase();
};
