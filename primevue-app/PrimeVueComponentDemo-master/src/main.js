import { defineCustomElement, createApp, h, getCurrentInstance } from "vue";
import { createVuetify } from "vuetify";
// Web-components
import Test from "./Test.ce.vue";
import VueCard from "./vuetify-test.ce.vue";
import "vuetify/styles";
import * as directives from "vuetify/directives";
// import { VBtn } from "vuetify/components/VBtn";
import * as components from "vuetify/components";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};
const vuetify = createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  components,
  directives,
});

console.log(VueCard);

// Define web-components

/**
 * Prime vue
 */
//const element = defineCustomElement(Test);

// customElements.define("my-component", element);

/**
 * Vuetify
 */

const getStylesRecursively = (component) => {
  const customElementStyles = [];

  if (component.styles) {
    customElementStyles.push(...component.styles);
  }

  const childComponents = component.components;
  if (childComponents) {
    Object.keys(childComponents).forEach((name) => {
      const styles = getStylesRecursively(childComponents[name]);
      customElementStyles.push(...styles);
    });
  }

  return customElementStyles;
};

const config = {
  component: VueCard,
  plugins: [vuetify],
};

const createElementInstance = ({ component = null, plugins = [] } = {}) => {
  return defineCustomElement({
    setup() {
      const app = createApp();
      plugins.forEach((plugin) => app.use(plugin));

      const inst = getCurrentInstance();
      console.log(inst);
      Object.assign(inst.appContext, app._context);
      Object.assign(inst.provides, app._context.provides);
    },
    render: () => h(component),
    styles: getStylesRecursively(component),
  });
};

customElements.define("my-component", createElementInstance(config));
