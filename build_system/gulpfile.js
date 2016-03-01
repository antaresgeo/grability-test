var g = require('gulp');
var del = require('del');
g.$ = require('gulp-load-plugins')();

g.task('build:polymer', function() {
  g.src('../elements.html')
    .pipe(g.$.vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true,
    }))
    .pipe(g.$.crisper())
    .pipe(g.dest('../libs'));
});

g.task('del:dev', function() {
  return del(['./bower_components/**', './node_modules']);
});

g.task('cp', function() {
  g.src(['bower_components/webcomponentsjs/webcomponents-lite.min.js'])
    .pipe(g.dest('../libs'));
})

g.task('build:js', function() {
  g.src(['../libs/*.js','../js/*.js','!../libs/*.min.js', '../js/*.min.js'])
    .pipe(g.$.uglify())
    .pipe(g.dest('../libs'));
})

g.task('default', ['cp', 'build:polymer'], function() {
  g.watch(['../elements.html', '../*-*.html'], ['cp', 'build:polymerLib']);
  g.watch((['../libs/*.js','../js/*.js','!../libs/*.min.js', '../js/*.min.js'], ['build:js']);
});
