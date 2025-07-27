const iterateFilter = require("./iterateFilter");

module.exports = function title(input) {
    var out = iterateFilter.apply(title, arguments);
    if (out !== undefined) {
        return out;
    }

    return input.toString().replace(/\w\S*/g, function (str) {
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
};
