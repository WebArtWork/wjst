const iterateFilter = require("./iterateFilter");

module.exports = function url_decode(input) {
    var out = iterateFilter.apply(url_decode, arguments);
    if (out !== undefined) {
        return out;
    }
    return decodeURIComponent(input);
};
