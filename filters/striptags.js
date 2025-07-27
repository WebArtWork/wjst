const iterateFilter = require("./iterateFilter");

module.exports = function striptags(input) {
    var out = iterateFilter.apply(striptags, arguments);
    if (out !== undefined) {
        return out;
    }

    return input.toString().replace(/(<([^>]+)>)/gi, "");
};
