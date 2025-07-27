module.exports = function json(input, indent) {
    return JSON.stringify(input, null, indent || 0);
};
