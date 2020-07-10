const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


const PRODUCTION = process.env.NODE_ENV === 'production'

const STATS = {
  all: false,
  errors: true,
  errorDetails: true,
  moduleTrace: true,
  warnings: true
}

module.exports = module.exports = [
  {
    target: 'node',
    entry: {
      'wikimedia-page-library-transform': './src/transform',
    },
    resolve: { extensions: ['.js', '.ts']},
    output: {
      path: path.resolve('build'),
      filename: '[name].js',
      library: 'pcs',
      libraryTarget: 'umd',
      libraryExport: 'default',

      // https://github.com/webpack/webpack/issues/6525
      globalObject: 'this'
    },
    performance: {
      hints: PRODUCTION ? 'error' : false,
      maxAssetSize: 2 * 128 * 1024,
      maxEntrypointSize: 2 * 192 * 1024
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: { android: 5, ios: 11 } }]],
              cacheDirectory: true,
              compact: PRODUCTION,
              comments: !PRODUCTION
            }
          }
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { minimize: false } },
            { loader: 'less-loader' }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { minimize: false } }
          ]
        }
      ]
    },

    stats: STATS,

    devtool: PRODUCTION ? undefined : 'source-map',

    devServer: PRODUCTION ? undefined : {
      clientLogLevel: 'warning',
      progress: false,
      overlay: { warnings: true, errors: true },
      stats: STATS
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(PRODUCTION ? 'production' : 'development')
        },
        VERSION: JSON.stringify(pkg.version)
      }),
      new MiniCssExtractPlugin({ filename: '[name].css' }),
    ]
  },
  {
    target: 'web',
    entry: {
      'wikimedia-page-library-pcs': './src/pcs',
      'wikimedia-page-library-override': './src/override',
    },

    resolve: { extensions: ['.js', '.ts']},

    output: {
      path: path.resolve('build'),
      filename: '[name].js',
      library: 'pcs',
      libraryTarget: 'umd',
      libraryExport: 'default',

      // https://github.com/webpack/webpack/issues/6525
      globalObject: 'this'
    },

    performance: {
      hints: PRODUCTION ? 'error' : false,
      maxAssetSize: 2 * 128 * 1024,
      maxEntrypointSize: 2 * 192 * 1024
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: { android: 5, ios: 11 } }]],
              cacheDirectory: true,
              compact: PRODUCTION,
              comments: !PRODUCTION
            }
          }
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { minimize: false } },
            { loader: 'less-loader' }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { minimize: false } }
          ]
        }
      ]
    },

    stats: STATS,

    devtool: PRODUCTION ? undefined : 'source-map',

    devServer: PRODUCTION ? undefined : {
      clientLogLevel: 'warning',
      progress: false,
      overlay: { warnings: true, errors: true },
      stats: STATS
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(PRODUCTION ? 'production' : 'development')
        },
        VERSION: JSON.stringify(pkg.version)
      }),
      new MiniCssExtractPlugin({ filename: '[name].css' }),
    ]
  },
  {
    target: 'web',
    entry: {
      'wikimedia-page-library-components': './src/components',
      'wikimedia-page-library-components-lit': './src/webcomponents',
    },

    resolve: { extensions: ['.js', '.ts']},

    output: {
      path: path.resolve('build'),
      filename: '[name].js',
      library: '[name]',
      libraryTarget: 'umd',
      libraryExport: 'default',

      // https://github.com/webpack/webpack/issues/6525
      globalObject: 'this'
    },

    performance: {
      hints: PRODUCTION ? 'error' : false,
      maxAssetSize: 2 * 128 * 1024,
      maxEntrypointSize: 2 * 192 * 1024
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: { android: 5, ios: 11 } }]],
              cacheDirectory: true,
              compact: PRODUCTION,
              comments: !PRODUCTION
            }
          }
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { minimize: false } },
            { loader: 'less-loader' }
          ]
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { minimize: false } }
          ]
        }
      ]
    },

    stats: STATS,

    devtool: PRODUCTION ? undefined : 'source-map',

    devServer: PRODUCTION ? undefined : {
      clientLogLevel: 'warning',
      progress: false,
      overlay: { warnings: true, errors: true },
      stats: STATS
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'wikimedia-page-library-vendor',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(PRODUCTION ? 'production' : 'development')
        },
        VERSION: JSON.stringify(pkg.version)
      }),
      new MiniCssExtractPlugin({ filename: '[name].css' }),
      new VueLoaderPlugin(),
      new BundleAnalyzerPlugin()
    ]
  }
];
