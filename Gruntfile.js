const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
  grunt.initConfig({
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: true }, webpackConfig)
    }
  });

  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['webpack']);
};