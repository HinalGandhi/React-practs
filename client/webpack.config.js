const path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin");
MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: ["./src/index.tsx"],
        vendor: ["react", "react-dom"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "js/[name].bundle.js",
       
    },
    optimization: {
        runtimeChunk: "single",
    },
    devServer: {
        open:true,
        port:3000,
        // proxy: {
        //     '**': {
        //         target: 'http://localhost:5000/',
        //         changeOrigin: true,
        //         secure: false,
        //       },
        // },
        historyApiFallback: true
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:8].css",
            chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
        }),
    ],
};