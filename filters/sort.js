const utils = require("../utils/utils");

module.exports = function sort(input, reverse) {
    var out, clone;
    if (utils.isArray(input)) {
        clone = utils.extend([], input);
        out = clone.sort();
    } else {
        switch (typeof input) {
            case "object":
                out = utils.keys(input).sort();
                break;
            case "string":
                out = input.split("");
                if (reverse) {
                    return out.reverse().join("");
                }
                return out.sort().join("");
        }
    }

    if (out && reverse) {
        return out.reverse();
    }

    return out || input;
};
