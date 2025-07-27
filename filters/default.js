module.exports = function _default(input, def) {
    return input !== undefined && (input || typeof input === "number")
        ? input
        : def;
};
