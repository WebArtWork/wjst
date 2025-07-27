const safe = require("./safe");

function raw(input) {
    return safe(input);
}
raw.safe = true;
module.exports = raw;
