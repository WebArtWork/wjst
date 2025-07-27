const sort = require("./sort");

/**
 * Reverse sort the input. This is an alias for `{{ input|sort(true) }}`.
 *
 * @example
 * // val = [1, 2, 3];
 * {{ val|reverse }}
 * // => 3,2,1
 *
 * @param  {array}  input
 * @return {array}        Reversed array. The original input object is returned if it was not an array.
 */

module.exports = function reverse(input) {
    return sort(input, true);
};
