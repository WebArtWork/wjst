const iterateFilter = require("./iterateFilter");

/**
 * URL-encode a string. If an object or array is passed, all values will be URL-encoded.
 *
 * @example
 * // my_str = 'param=1&anotherParam=2';
 * {{ my_str|url_encode }}
 * // => param%3D1%26anotherParam%3D2
 *
 * @param  {*} input
 * @return {*}       URL-encoded string.
 */

module.exports = function url_encode(input) {
    var out = iterateFilter.apply(url_encode, arguments);
    if (out !== undefined) {
        return out;
    }
    return encodeURIComponent(input);
};
