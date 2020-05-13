module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["env", {
      "modules": false
    }],
    "stage-2"
  ],
  "plugins": [
    "graphql-tag",
    "transform-vue-jsx",
    "transform-runtime"
  ]
};
