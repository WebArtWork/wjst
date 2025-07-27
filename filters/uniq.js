const utils = require("../utils/utils");

/**
 * Remove all duplicate items from an array.
 *
 * @example
 * // my_arr = [1, 2, 3, 4, 4, 3, 2, 1];
 * {{ my_arr|uniq|join(',') }}
 * // => 1,2,3,4
 *
 * @param  {array}  input
 * @return {array}        Array with unique items. If input was not an array, the original item is returned untouched.
 */

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
