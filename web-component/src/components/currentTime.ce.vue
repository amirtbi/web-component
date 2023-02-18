<template>
  <div class="grid p-2">
    <div class="col-12">
      <InputText type="text" v-model="value" />

      <Button label="Submit" icon="pi pi-check" iconPos="right" />

      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";

import Button from "primevue/button";

import InputText from "primevue/inputtext";

const value = ref("");
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/primevue@3.17.0/resources/primevue.min.css";
@import "https://cdn.jsdelivr.net/npm/primevue@3.17.0/resources/themes/saga-blue/theme.css";
@import "https://cdn.jsdelivr.net/npm/primeicons@5.0.0/primeicons.css";
@import "https://cdn.jsdelivr.net/npm/primeflex@2.0.0/primeflex.min.css";
</style>
