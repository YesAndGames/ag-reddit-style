module.exports = function(grunt) {
  [ 'grunt-contrib-sass',
    'grunt-contrib-watch' ].forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    sass: {
      dist: {
        options: { style: 'expanded' },
        files: { 'build/main.css': 'style/main.scss' }
      }
    },

    watch: {
      js: {
        files: ['style/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', [ 'sass' ]);
};
