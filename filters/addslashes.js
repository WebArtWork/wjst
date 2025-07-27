const iterateFilter = require("./iterateFilter");

/**
 * Backslash-escape characters that need to be escaped.
 *
 * @example
 * {{ "\"quoted string\""|addslashes }}
 * // => \"quoted string\"
 *
 * @param  {*}  input
 * @return {*}        Backslash-escaped string.
 */

module.exports = function addslashes(input) {
    var out = iterateFilter.apply(addslashes, arguments);
    if (out !== undefined) {
        return out;
    }

    return input
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"');
};
