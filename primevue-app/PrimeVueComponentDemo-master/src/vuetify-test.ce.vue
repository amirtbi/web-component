<template>
  <VRow>
    <VCol class="pa-2" cols="12">
      <v-btn color="warning"> Accept Terms </v-btn>
    </VCol>
  </VRow>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const fontImport = document.createElement("link");
  const scriptImport = document.createElement("script");
  // setAttributes(fontImport, [
  //   {
  //     name: "href",
  //     value:
  //       "https://cdnjs.cloudflare.com/ajax/libs/vuetify/3.1.5/vuetify.min.css",
  //   },
  //   { name: "rel", value: "stylesheet" },
  //   // { name: "type", value: "text/css" },
  // ]);

  document.head.appendChild(fontImport);

  // setAttributes(scriptImport, [
  //   {
  //     name: "src",

  //     value:
  //       "https://cdnjs.cloudflare.com/ajax/libs/vuetify/3.1.5/vuetify.min.js",
  //   },
  //   {
  //     name: "type",
  //     value: "module",
  //   },
  // ]);
  document.head.appendChild(scriptImport);
});

const setAttributes = (elem, attrs) => {
  attrs.forEach((attr) => {
    elem.setAttribute(attr.name, attr.value);
  });
};
</script>

<style>
/* @import "vuetify/styles"; */
@import "./style.css";
</style>
