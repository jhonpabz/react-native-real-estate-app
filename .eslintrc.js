module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    semi: ["error", "never"],
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
  },
  plugins: ["prettier"],
};
