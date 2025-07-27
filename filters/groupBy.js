const utils = require("../utils/utils");

/**
 * Group an array of objects by a common key. If an array is not provided, the input value will be returned untouched.
 *
 * @example
 * // people = [{ age: 23, name: 'Paul' }, { age: 26, name: 'Jane' }, { age: 23, name: 'Jim' }];
 * {% for agegroup in people|groupBy('age') %}
 *   <h2>{{ loop.key }}</h2>
 *   <ul>
 *     {% for person in agegroup %}
 *     <li>{{ person.name }}</li>
 *     {% endfor %}
 *   </ul>
 * {% endfor %}
 *
 * @param  {*}      input Input object.
 * @param  {string} key   Key to group by.
 * @return {object}       Grouped arrays by given key.
 */

module.exports = function groupBy(input, key) {
    if (!utils.isArray(input)) {
        return input;
    }

    var out = {};

    utils.each(input, function (value) {
        if (!value.hasOwnProperty(key)) {
            return;
        }

        var keyname = value[key];
        var newValue = utils.extend({}, value);
        delete newValue[key];

        if (!out[keyname]) {
            out[keyname] = [];
        }

        out[keyname].push(newValue);
    });

    return out;
};
