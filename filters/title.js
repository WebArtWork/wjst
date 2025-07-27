const iterateFilter = require("./iterateFilter");

/**
 * Capitalizes every word given and lower-cases all other letters.
 *
 * @example
 * // my_str = 'this is soMe text';
 * {{ my_str|title }}
 * // => This Is Some Text
 *
 * @example
 * // my_arr = ['hi', 'this', 'is', 'an', 'array'];
 * {{ my_arr|title|join(' ') }}
 * // => Hi This Is An Array
 *
 * @param  {*}  input
 * @return {*}        Returns the same object as the input, but with all words in strings title-cased.
 */

module.exports = function title(input) {
    var out = iterateFilter.apply(title, arguments);
    if (out !== undefined) {
        return out;
    }

    return input.toString().replace(/\w\S*/g, function (str) {
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
};
