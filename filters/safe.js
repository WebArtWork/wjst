function safe(input) {
    // This is a magic filter. Its logic is hard-coded into Swig's parser.
    return input;
}

safe.safe = true;
module.exports = safe;
