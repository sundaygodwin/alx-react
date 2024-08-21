const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'assets/[name][ext][query]' // Handle asset files
  },
  mode: 'production',
  module: {
    rules: [
      // Rule for CSS files
      {
        test: /\.css$/,
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader'    // Resolve CSS imports and URLs
        ]
      },
      // Rule for image files with optimization
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource', // Emit the image file as a separate asset
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65 // Adjust quality for JPEG images
              },
              optipng: {
                enabled: true, // Optimize PNG images
              },
              pngquant: {
                quality: [0.65, 0.90], // Quality range for PNG images
                speed: 4
              },
              gifsicle: {
                interlaced: false, // Disable interlacing for GIFs
              },
              webp: {
                quality: 75 // Quality for WebP images
              }
            }
          }
        ]
      }
    ]
  }
};