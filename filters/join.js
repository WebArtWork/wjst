const utils = require("../utils/utils");

/**
 * Join the input with a string.
 *
 * @example
 * // my_array = ['foo', 'bar', 'baz']
 * {{ my_array|join(', ') }}
 * // => foo, bar, baz
 *
 * @example
 * // my_key_object = { a: 'foo', b: 'bar', c: 'baz' }
 * {{ my_key_object|join(' and ') }}
 * // => foo and bar and baz
 *
 * @param  {*}  input
 * @param  {string} glue    String value to join items together.
 * @return {string}
 */

module.exports = function join(input, glue) {
    if (utils.isArray(input)) {
        return input.join(glue);
    }

    if (typeof input === "object") {
        var out = [];
        utils.each(input, function (value) {
            out.push(value);
        });
        return out.join(glue);
    }
    return input;
};
