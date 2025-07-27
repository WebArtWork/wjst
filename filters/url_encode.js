const iterateFilter = require("./iterateFilter");

module.exports = function url_encode(input) {
    var out = iterateFilter.apply(url_encode, arguments);
    if (out !== undefined) {
        return out;
    }
    return encodeURIComponent(input);
};
