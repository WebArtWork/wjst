const iterateFilter = require("./iterateFilter");

/**
 * Strip HTML tags.
 *
 * @example
 * // stuff = '<p>foobar</p>';
 * {{ stuff|striptags }}
 * // => foobar
 *
 * @param  {*}  input
 * @return {*}        Returns the same object as the input, but with all string values stripped of tags.
 */

module.exports = function striptags(input) {
    var out = iterateFilter.apply(striptags, arguments);
    if (out !== undefined) {
        return out;
    }

    return input.toString().replace(/(<([^>]+)>)/gi, "");
};
