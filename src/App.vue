<template>
  <t-button>按钮</t-button>
  <t-button type="success">按钮</t-button>
  <t-button type="warning">按钮</t-button>
  <t-input v-model="value"></t-input>
  <p>{{ value }}</p>
</template>
<script setup>
import { ref } from "vue";

const value = ref("");
</script>
<style lang="scss" scoped></style>
