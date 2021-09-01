module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: "css",
        targets: {
          node: "current",
        },
      },
    ], // `style: true` for less
  ],
};
