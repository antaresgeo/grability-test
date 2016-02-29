var g = require('gulp');
g.$ = require('gulp-load-plugins')();

g.task('build:polymerLib', function () {
    g.src('elements.html')
        .pipe(g.$.vulcanize({
            stripComments: true,
            inlineScripts: true,
            inlineCss: true,
        }))
        .pipe(g.$.crisper())
        .pipe(g.dest('../libs'));
});

g.task('cp', function(){
    g.src(['bower_components/webcomponentsjs/webcomponents-lite.min.js'])
        .pipe(g.dest('../libs'));
})

g.task('default', ['cp','build:polymerLib'],function () {
    g.watch('elements.html', ['cp','build:polymerLib']);
});