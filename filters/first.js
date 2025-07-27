const utils = require("../utils/utils");

module.exports = function first(input) {
    if (typeof input === "object" && !utils.isArray(input)) {
        var keys = utils.keys(input);
        return input[keys[0]];
    }

    if (typeof input === "string") {
        return input.substr(0, 1);
    }

    return input[0];
};
