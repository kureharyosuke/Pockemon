module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "airbnb"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "arrow-parens": "off",
    "prettier/prettier": "error",
    "no-use-before-define": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", ".ts"] }],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": [1, {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }]
  }
};