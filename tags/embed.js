
/**
 * Embed a template and compile it into the current template at build time.
 *
 * @alias embed
 *
 * @param {string} file Path to the template to embed.
 */
exports.compile = function (compiler, args, content, parents, opts) {
  var file = args.shift()
  var parentFile = (args.pop() || '').replace(/\\/g, '\\')
  var filepath = file.replace(/^['"]|['"]$/g, '')
  var parsed = _swig.parseFile(filepath, { resolveFrom: parentFile })
  return compiler(parsed.tokens, parents, opts)
}

exports.parse = function (str, line, parser, types, stack, opts) {
  var file
  parser.on(types.STRING, function (token) {
    if (!file) {
      file = token.match
      this.out.push(file)
      return
    }
    return true
  })

  parser.on(types.VAR, function (token) {
    if (!file) {
      file = token.match
      return true
    }
    return true
  })

  parser.on('end', function () {
    this.out.push(opts.filename || null)
  })

  return true
}

