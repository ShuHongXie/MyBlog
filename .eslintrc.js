module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
         "plugin:@typescript-eslint/recommended"
    ],
    // "globals": {
    //     "Atomics": "readonly",
    //     "SharedArrayBuffer": "readonly"
    // },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "no-var": 0,
        // "eqeqeq": [
        //     "error",
        //     "always",
        //     {
        //         null: "ignore"
        //     }
        // ],
        // // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
        // "@typescript-eslint/restrict-plus-operands": "error"
    }
};