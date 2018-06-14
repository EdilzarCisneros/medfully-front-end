const gulp = require( 'gulp' );
const cleanCSS = require( 'gulp-clean-css' );
const watch = require( "gulp-watch" );
const sass = require( "gulp-sass" );
const autoprefixer = require( "gulp-autoprefixer" );
const sourcemaps = require( "gulp-sourcemaps" );
const rename = require( "gulp-rename" );
const concatFiles = require( 'gulp-concat' );
const uglify = require( 'gulp-uglify' );
const util = require( "util" );
const chug = require( "gulp-chug" );
const fileinclude = require( 'gulp-file-include' );
const browserSync = require( 'browser-sync' ).create();
const less = require( 'gulp-less' );

const config = {
	source: {
		sass: [ "src/scss/main.scss" ],
		bootstrap_sass: [ "src/less/bootstrap-recompile.less" ]
	}
};

gulp.task( 'file-include', () => {
	gulp.src( [ './page-wrappers/*.include.html' ] )
		.pipe( fileinclude( {
			prefix: '@@',
			basepath: '@file'
		} ) )
		.pipe( rename( ( path ) => {
			path.dirname += "/";
			path.basename = path.basename.replace( ".include", "" );
			path.extname = ".html"
		} ) )
		.pipe( gulp.dest( './do-not-touch' ) );
} );

gulp.task( "compile-styles", () => {
	return gulp.src( config.source.sass )
		.pipe( sourcemaps.init() )
		.pipe( sass().on( "error", sass.logError ) )
		.pipe( autoprefixer( { browsers: [ "last 2 versions" ] } ) )
		.pipe( rename( 'all-med-styles.min.css' ) )
		.pipe( sourcemaps.write( "/." ) )
		.pipe( gulp.dest( "dist/css" ) );

} );

gulp.task( 'watch', () => {
	watch( 'src/scss/*.scss', ( file ) => {
		util.log( "SCSS file changed: ", file.path );
		gulp.start( "compile-styles", browserSync.reload );

	} ).on( "error", function( error ) {
		util.log( util.colors.red( "Error" ), error.message );
	} );

	watch( 'page*/**/*.html', ( file ) => {
		util.log( "Include HTML file changed: ", file.path );
		gulp.start( "file-include", browserSync.reload );

	} ).on( "error", function( error ) {
		util.log( util.colors.red( "Error" ), error.message );
	} );
} );

// Compiles LESS for Bootstrap 3.x
gulp.task( 'build:bootstrap', () => {
	return gulp.src( config.source.bootstrap_sass )
		.pipe( sourcemaps.init() )
		.pipe( less() )
		.pipe( concatFiles( 'all-med-bootstrap-styles.css' ) )
		.pipe( gulp.dest( 'dist/css' ) )
		.pipe( cleanCSS( { compatibility: 'ie8' } ) )
		.pipe( rename( 'all-med-bootstrap-styles.min.css' ) )
		.pipe( sourcemaps.write( "/." ) )
		.pipe( gulp.dest( 'dist/css' ) );
} );

gulp.task( 'browserSync', function() {
	browserSync.init( {
		server: {
			baseDir: './'
		}
	} )
} );

gulp.task( "serve" , [ 'file-include', 'compile-styles', 'build:bootstrap', 'watch', 'browserSync' ]);

gulp.task( "default", [ "compile-styles", "watch" ] );