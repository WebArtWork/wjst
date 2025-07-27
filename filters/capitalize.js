const iterateFilter = require("./iterateFilter");

/**
 * Upper-case the first letter of the input and lower-case the rest.
 *
 * @example
 * {{ "i like Burritos"|capitalize }}
 * // => I like burritos
 *
 * @param  {*} input  If given an array or object, each string member will be run through the filter individually.
 * @return {*}        Returns the same type as the input.
 */

module.exports = function capitalize(input) {
    var out = iterateFilter.apply(capitalize, arguments);
    if (out !== undefined) {
        return out;
    }

    return (
        input.toString().charAt(0).toUpperCase() +
        input.toString().substr(1).toLowerCase()
    );
};
