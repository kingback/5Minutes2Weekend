module.exports = {
  presets: [
    ['@babel/preset-env', {
      loose: true,
      modules: process.env.BUILD_TYPE === 'esm' ? false : 'commonjs'
    }]
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from'
  ]
}