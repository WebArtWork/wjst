const utils = require("../utils/utils");

/**
 * Get the first item in an array or character in a string. All other objects will attempt to return the first value available.
 *
 * @example
 * // my_arr = ['a', 'b', 'c']
 * {{ my_arr|first }}
 * // => a
 *
 * @example
 * // my_val = 'Tacos'
 * {{ my_val|first }}
 * // T
 *
 * @param  {*} input
 * @return {*}        The first item of the array or first character of the string input.
 */

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
