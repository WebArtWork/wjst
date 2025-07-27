module.exports = function replace(input, search, replacement, flags) {
    var r = new RegExp(search, flags);
    return input.replace(r, replacement);
};
