module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-html-build");

  grunt.initConfig({
    htmlbuild: {
      dist: {
        src: "template/home_page.html",
        dest: "index.html",
        options: {
          sections: {
            partials: {
              projects: "sections/projects.html",
              resume: "sections/resume.html"
            }
          }
        }
      }
    }
  });

  grunt.registerTask("build", ["htmlbuild"]);
};
