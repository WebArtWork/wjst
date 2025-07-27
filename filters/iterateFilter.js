const utils = require("../utils/utils");

function iterateFilter(input) {
    var self = this;
    var out = {};

    if (utils.isArray(input)) {
        return utils.map(input, function (value) {
            return self.apply(null, arguments);
        });
    }

    if (typeof input === "object") {
        utils.each(input, function (value, key) {
            out[key] = self.apply(null, arguments);
        });
        return out;
    }
}

module.exports = iterateFilter;
