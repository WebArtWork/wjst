const iterateFilter = require("./iterateFilter");

/**
 * URL-decode a string. If an object or array is passed, all values will be URL-decoded.
 *
 * @example
 * // my_str = 'param%3D1%26anotherParam%3D2';
 * {{ my_str|url_decode }}
 * // => param=1&anotherParam=2
 *
 * @param  {*} input
 * @return {*}       URL-decoded string.
 */

module.exports = function url_decode(input) {
    var out = iterateFilter.apply(url_decode, arguments);
    if (out !== undefined) {
        return out;
    }
    return decodeURIComponent(input);
};
