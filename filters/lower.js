const iterateFilter = require("./iterateFilter");

/**
 * Return the input in all lowercase letters.
 *
 * @example
 * {{ "FOOBAR"|lower }}
 * // => foobar
 *
 * @example
 * // myObj = { a: 'FOO', b: 'BAR' }
 * {{ myObj|lower|join('') }}
 * // => foobar
 *
 * @param  {*}  input
 * @return {*}          Returns the same type as the input.
 */

module.exports = function lower(input) {
    var out = iterateFilter.apply(lower, arguments);
    if (out !== undefined) {
        return out;
    }

    return input.toString().toLowerCase();
};
