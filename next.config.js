const { i18n } = require("./next-i18next.config");

module.exports = {
  target: "experimental-serverless-trace",
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.jsx?$/,
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
        },
        {
          loader: require.resolve("url-loader"),
          options: {
            name: "[name].[hash:8].[ext]",
            limit: 10240,
          },
        },
      ],
    });

    return config;
  },
};
