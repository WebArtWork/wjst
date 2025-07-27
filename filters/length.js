const utils = require("../utils/utils");

module.exports = function length(input) {
    if (typeof input === "object" && !utils.isArray(input)) {
        var keys = utils.keys(input);
        return keys.length;
    }
    if (input.hasOwnProperty("length")) {
        return input.length;
    }
    return "";
};
