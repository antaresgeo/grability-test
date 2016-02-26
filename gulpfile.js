var g = require('gulp');
g.$ = require('gulp-load-plugins')();

g.task('build:polymerLib', function(){
	g.src('elements.html')
		.pipe(g.$.vulcanize({
			stripComments: true,
            inlineScripts: true,
            inlineCss:true,
        }))
        .pipe(g.$.crisper())
        .pipe(g.dest('src/libs'))
});

g.task('default',function () {
	g.watch(['elements.html', 'src/ex-list.html'],['build:polymerLib']);
});
