'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-http-server');
    grunt.initConfig({

        'http-server': {

            'dev': {

                // the server root directory
                root: './',

                // the server port
                // can also be written as a function, e.g.
                // port: function() { return 8282; }
                port: 8282,


                // the host ip address
                // If specified to, for example, "127.0.0.1" the server will
                // only be available on that ip.
                // Specify "0.0.0.0" to be available everywhere
                host: "127.0.0.1",

                cache: 0,
                showDir: true,
                autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: true | false,

                // specify a logger function. By default the requests are
                // sent to stdout.
                logFn: function (req, res, error) {
                }
            }
        }
    });
    grunt.registerTask('http-server', ['http-server:dev']);
};