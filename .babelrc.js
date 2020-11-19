module.exports = {
  presets: [
    ['@babel/preset-env', {
      loose: true,
      modules: process.env.PRESET_ENV_MODULES === 'esm' ? false : 'commonjs'
    }]
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from'
  ]
}