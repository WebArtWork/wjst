const utils = require("../utils/utils");

module.exports = function uniq(input) {
    var result;

    if (!input || !utils.isArray(input)) {
        return "";
    }

    result = [];
    utils.each(input, function (v) {
        if (result.indexOf(v) === -1) {
            result.push(v);
        }
    });
    return result;
};
