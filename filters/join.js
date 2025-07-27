const utils = require("../utils/utils");

module.exports = function join(input, glue) {
    if (utils.isArray(input)) {
        return input.join(glue);
    }

    if (typeof input === "object") {
        var out = [];
        utils.each(input, function (value) {
            out.push(value);
        });
        return out.join(glue);
    }
    return input;
};
