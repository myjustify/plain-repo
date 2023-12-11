/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-unused-properties': ['error', {
      'groups': ['props', 'data', 'methods', 'computed'],
      'deepData': true,
      'ignorePublicMembers': false
    }],
    // 属性换行配置
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': 'off',
    'vue/no-v-html': 'off',
    // 允许属性在同一行
    'object-property-newline': ['error', {
      'allowAllPropertiesOnSameLine': false
    }],
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "off",
    "vue/multi-word-component-names": "off",
    "vue/component-definition-name-casing": "off",
    "@typescript-eslint/no-explicit-any": "off", // any
    "no-debugger": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off", // setup()
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }
    ],
    "indent": [ "error", 2 ], // 强制缩进2
    "spaced-comment": 2,// 注释风格要不要有空格什么的
    "space-before-blocks": 2,  // if function等的大括号之前需要有空格
    "space-infix-ops": 2,
    "no-irregular-whitespace": 2, // 不规则的空白不允许
    "no-trailing-spaces": 2, // 一行结束后面有空格就发出警告
    "object-curly-spacing": [ "error","always" ]
  }
}
