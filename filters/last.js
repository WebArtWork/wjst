const utils = require("../utils/utils");

module.exports = function last(input) {
    if (typeof input === "object" && !utils.isArray(input)) {
        var keys = utils.keys(input);
        return input[keys[keys.length - 1]];
    }

    if (typeof input === "string") {
        return input.charAt(input.length - 1);
    }

    return input[input.length - 1];
};
