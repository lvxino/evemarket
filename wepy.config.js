const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
    wpyExt: '.wpy',
    build: {},
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            service: path.join(__dirname, 'src/service/index.js'),
            lib: path.join(__dirname, 'src/lib'),
            components: path.join(__dirname, 'src/components')
        },
        modules: ['node_modules']
    },
    eslint: false,
    compilers: {
        less: {
            compress: true
        },
        babel: {
            sourceMap: true,
            presets: ['env'],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions'
            ]
        }
    },
    plugins: {},
    appConfig: {
        noPromiseAPI: ['createSelectorQuery']
    }
};

if (prod) {
    delete module.exports.compilers.babel.sourcesMap;
    // 压缩sass
    // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

    // 压缩less
    module.exports.compilers['less'] = { compress: true };

    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {}
        },
        // imagemin: {
        //     filter: /\.(jpg|png|jpeg)$/,
        //     config: {
        //         jpg: {
        //             quality: 80
        //         },
        //         png: {
        //             quality: 80
        //         }
        //     }
        // }
    };
}
