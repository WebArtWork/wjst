const utils = require("../utils/utils");

module.exports = function groupBy(input, key) {
    if (!utils.isArray(input)) {
        return input;
    }

    var out = {};

    utils.each(input, function (value) {
        if (!value.hasOwnProperty(key)) {
            return;
        }

        var keyname = value[key];
        var newValue = utils.extend({}, value);
        delete newValue[key];

        if (!out[keyname]) {
            out[keyname] = [];
        }

        out[keyname].push(newValue);
    });

    return out;
};
