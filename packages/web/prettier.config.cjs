/** @type {import("prettier").Config} */
module.exports = {
  ...import("/home/flero/git/icanhazfox/prettier.config.cjs"),
  plugins: [import("prettier-plugin-tailwindcss")],
};
