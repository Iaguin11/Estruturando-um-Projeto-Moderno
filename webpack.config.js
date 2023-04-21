const path = require('path');

module.exports = {
    entry : {
        index : './src/index.js'
    },
    mode : 'production',
    module : {
        rules : [{
            test : /\.css$/,
            use : ['style-loader', 'css-loader']
        },
    {
        test : /\.js$/,
        exclude : /node_modules/,
        use : {
            loader : 'babel-loader',
            options : {
                presets : ['@babel/preset-env']
            }
        }
    }]
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : '[name].min.js'
    }
}