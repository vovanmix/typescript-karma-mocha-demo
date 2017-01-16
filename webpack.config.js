var path = require("path");

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['ts'],
                exclude: /node_modules/,
            }
        ]
    }
}
