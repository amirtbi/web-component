import { defineCustomElement, createApp } from "vue";
import Example from "./components/currentTime.ce.vue";

// register
customElements.define("my-example", defineCustomElement(Example));
