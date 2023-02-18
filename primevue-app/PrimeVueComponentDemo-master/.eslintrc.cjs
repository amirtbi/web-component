// eslint-disable-next-line no-undef
module.exports = {
  env: { 
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  rules: {
    // override/add rules settings here, such as:
    //'vue/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'vue/no-unused-vars': 'off',
    'vue/attributes-order' : 'off',
    'vue/component-definition-name-casing' : 'off',
    'vue/multi-word-component-names' : 'off',
    'vue/order-in-components' : 'off',
    'vue/require-v-for-key' : 'off',
		'vue/attribute-hyphenation': 'off',
		'vue/require-default-prop': 'off',
		'vue/first-attribute-linebreak': 'off',
		'vue/v-on-event-hyphenation': 'off',
		'vue/require-explicit-emits': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-useless-template-attributes': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-reserved-component-names': 'off'
  }
}