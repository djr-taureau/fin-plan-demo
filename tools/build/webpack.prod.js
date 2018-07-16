const $ = require('./helper');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const debug = process.env.NODE_ENV !== "production";


const copyTargets = [{
    context: '',
    from: '**/host.json',
    to: '..'
  },
  {
    context: 'micro-services',
    from: '**/function.json',
    to: ''
  }
];


const localSettings = {
  context: '',
  from: '**/local.settings.json',
  to: '..'
}

module.exports = {
  target: 'node',
  entry: {
    'activity-log/GetActivityLog': $.root('./micro-services/activity-log/GetActivityLog'),
    'activity-log/LogActivity': $.root('./micro-services/activity-log/LogActivity')
  },
  output: {
    path: $.root('dist/micro-services'),
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /micro-services\\*\.ts$/,
      use: 'awesome-typescript-loader?declaration=false&?configFileName=./micro-services/tsconfig.microservices.json',
      exclude: [/\.(spec|e2e)\.ts$/]
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [
      'node_modules',
      'micro-services'
    ]
  },
  plugins: [
    new uglifyJSPlugin({
      uglifyOptions: {
        ecma: 6
      }
    }),
    debug ?
    new copyWebpackPlugin([...copyTargets, localSettings]) :
    new copyWebpackPlugin(copyTargets)
  ],
  node: {
    __filename: false,
    __dirname: false,
  }
};
