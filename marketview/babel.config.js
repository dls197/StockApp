module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}]
    ],
    plugins: ["babel-plugin-myPlugin", "@babel/plugin-syntax-jsx"] 
  };