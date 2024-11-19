const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Dispatching LLC",
            template: path.resolve(__dirname, "./src/temp.html"),
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/sign-up-form/sign-up.html", to: "sign-up-form/" },
                { from: "src/assets", to: "assets" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/[name].[hash][ext][query]",
                },
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        alias: {
            "component-image-carousel": path.resolve(
                __dirname,
                "node_modules/component-image-carousel"
            ),
        },
    },
};
