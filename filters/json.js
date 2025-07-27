/**
 * Return a string representation of an JavaScript object.
 *
 * Backwards compatible with swig@0.x.x using `json_encode`.
 *
 * @example
 * // val = { a: 'b' }
 * {{ val|json }}
 * // => {"a":"b"}
 *
 * @example
 * // val = { a: 'b' }
 * {{ val|json(4) }}
 * // => {
 * //        "a": "b"
 * //    }
 *
 * @param  {*}    input
 * @param  {number}  [indent]  Number of spaces to indent for pretty-formatting.
 * @return {string}           A valid JSON string.
 */
module.exports = function json(input, indent) {
    return JSON.stringify(input, null, indent || 0);
};
