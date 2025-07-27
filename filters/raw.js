const safe = require("./safe");

/**
 * Deprecated in favor of <a href="#safe">safe</a>.
 */

function raw(input) {
    return safe(input);
}
raw.safe = true;
module.exports = raw;
