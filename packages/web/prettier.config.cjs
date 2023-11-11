/** @type {import("prettier").Config} */
module.exports = {
  ...import("../../prettier.config.cjs"),
  plugins: [import("prettier-plugin-tailwindcss")],
};
