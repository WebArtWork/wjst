/**
 * Format a date or Date-compatible string.
 *
 * @example
 * // now = new Date();
 * {{ now|date('Y-m-d') }}
 * // => 2013-08-14
 * @example
 * // now = new Date();
 * {{ now|date('jS \o\f F') }}
 * // => 4th of July
 *
 * @param  {?(string|date)}   input
 * @param  {string}           format  PHP-style date format compatible string. Escape characters with <code>\</code> for string literals.
 * @param  {number=}          offset  Timezone offset from GMT in minutes.
 * @param  {string=}          abbr    Timezone abbreviation. Used for output only.
 * @return {string}                   Formatted date string.
 */

const dateFormatter = require("../utils/dateformatter");

const date = function (input, format, offset, abbr) {
	var l = format.length;
	var date = new dateFormatter.DateZ(input);
	var cur;
	var i = 0;
	var out = "";

	if (offset) {
		date.setTimezoneOffset(offset, abbr);
	}

	for (i; i < l; i += 1) {
		cur = format.charAt(i);
		if (cur === "\\") {
			i += 1;
			out += i < l ? format.charAt(i) : cur;
		} else if (dateFormatter.hasOwnProperty(cur)) {
			out += dateFormatter[cur](date, offset, abbr);
		} else {
			out += cur;
		}
	}
	return out;
};

module.exports = date;
