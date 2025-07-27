const iterateFilter = require("./iterateFilter");

module.exports = function lower(input) {
    var out = iterateFilter.apply(lower, arguments);
    if (out !== undefined) {
        return out;
    }

    return input.toString().toLowerCase();
};
