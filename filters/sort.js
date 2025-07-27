const utils = require("../utils/utils");

/**
 * Sort the input in an ascending direction.
 * If given an object, will return the keys as a sorted array.
 * If given a string, each character will be sorted individually.
 *
 * @example
 * // val = [2, 6, 4];
 * {{ val|sort }}
 * // => 2,4,6
 *
 * @example
 * // val = 'zaq';
 * {{ val|sort }}
 * // => aqz
 *
 * @example
 * // val = { bar: 1, foo: 2 }
 * {{ val|sort(true) }}
 * // => foo,bar
 *
 * @param  {*} input
 * @param {boolean} [reverse=false] Output is given reverse-sorted if true.
 * @return {*}        Sorted array;
 */

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
