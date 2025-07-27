const iterateFilter = require("./iterateFilter");

module.exports = function addslashes(input) {
    var out = iterateFilter.apply(addslashes, arguments);
    if (out !== undefined) {
        return out;
    }

    return input
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"');
};
