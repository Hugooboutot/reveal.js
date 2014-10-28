exports.config =
  files:
    javascripts:
      joinTo: 'app.js'
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'app.js'

  modules:
    nameCleaner: (path) ->
      path
        # Strip app/ and app/externals/ prefixes
        .replace /^app\/(?:external\/)?/, ''
        # Allow -x.y[.z…] version suffixes in mantisses
        .replace /-\d+(?:\.\d+)+/, ''
        # Allow -fr lang suffixes in mantisses
        .replace '-fr.', '.'

  plugins:
    browserSync:
      codeSync: false
      online: false

  watcher:
    usePolling: true
