<template>
  <div class="grid p-2">
    <div class="col-12">
      <h1>red color</h1>
      <card>
        <template #content>
          Card TEST
          <Button type="button" icon="pi pi-caret-right" label="Press Me" />

          <i class="pi pi-check"></i>
          <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
        </template>
      </card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import Button from "primevue/button";

onMounted(() => {
  const fontImport = document.createElement("link");
  setAttributes(fontImport, [
    {
      name: "href",
      value: "https://cdn.jsdelivr.net/npm/primeicons@6.0.1/primeicons.min.css",
    },
    { name: "rel", value: "stylesheet" },
    { name: "type", value: "text/css" },
  ]);
  document.head.appendChild(fontImport);
});

const setAttributes = (elem, attrs) => {
  attrs.forEach((attr) => {
    elem.setAttribute(attr.name, attr.value);
  });
};
</script>

<style>
@import "./style.css";
@import "primeflex/primeflex.css";
@import "primevue/resources/themes/saga-blue/theme.css";
@import "primevue/resources/primevue.min.css";
@import "primeicons/primeicons.css";
</style>
