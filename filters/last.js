const utils = require("../utils/utils");

/**
 * Get the last item in an array or character in a string. All other objects will attempt to return the last value available.
 *
 * @example
 * // my_arr = ['a', 'b', 'c']
 * {{ my_arr|last }}
 * // => c
 *
 * @example
 * // my_val = 'Tacos'
 * {{ my_val|last }}
 * // s
 *
 * @param  {*} input
 * @return {*}          The last item of the array or last character of the string.input.
 */

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
