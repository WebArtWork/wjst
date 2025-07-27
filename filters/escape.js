const iterateFilter = require("./iterateFilter");

/**
 * Force escape the output of the variable. Optionally use `e` as a shortcut filter name. This filter will be applied by default if autoescape is turned on.
 *
 * @example
 * {{ "<blah>"|escape }}
 * // => &lt;blah&gt;
 *
 * @example
 * {{ "<blah>"|e("js") }}
 * // => \u003Cblah\u003E
 *
 * @param  {*} input
 * @param  {string} [type='html']   If you pass the string js in as the type, output will be escaped so that it is safe for JavaScript execution.
 * @return {string}         Escaped string.
 */

module.exports = function escape(input, type) {
    var out = iterateFilter.apply(escape, arguments);
    var inp = input;
    var i = 0;
    var code;

    if (out !== undefined) {
        return out;
    }

    if (typeof input !== "string") {
        return input;
    }

    out = "";

    switch (type) {
        case "js":
            inp = inp.replace(/\\/g, "\\u005C");
            for (i; i < inp.length; i += 1) {
                code = inp.charCodeAt(i);
                if (code < 32) {
                    code = code.toString(16).toUpperCase();
                    code = code.length < 2 ? "0" + code : code;
                    out += "\\u00" + code;
                } else {
                    out += inp[i];
                }
            }
            return out
                .replace(/&/g, "\\u0026")
                .replace(/</g, "\\u003C")
                .replace(/>/g, "\\u003E")
                .replace(/'/g, "\\u0027")
                .replace(/"/g, "\\u0022")
                .replace(/=/g, "\\u003D")
                .replace(/-/g, "\\u002D")
                .replace(/;/g, "\\u003B");

        default:
            return inp
                .replace(/&(?!amp;|lt;|gt;|quot;|#39;)/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
    }
};
