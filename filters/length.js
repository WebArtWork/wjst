const utils = require("../utils/utils");

/**
 * Get the number of items in an array, string, or object.
 *
 * @example
 * // my_arr = ['a', 'b', 'c']
 * {{ my_arr|length }}
 * // => 3
 *
 * @example
 * // my_str = 'Tacos'
 * {{ my_str|length }}
 * // => 5
 *
 * @example
 * // my_obj = {a: 5, b: 20}
 * {{ my_obj|length }}
 * // => 2
 *
 * @param  {*} input
 * @return {*}          The length of the input
 */

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
