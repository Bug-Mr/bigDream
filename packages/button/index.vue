<template>
  <div :class="tClass">
    <button><slot></slot></button>
  </div>
</template>
<script setup name="tButton">
import { computed } from "@vue/runtime-core";

// name script不能为空
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
});
const tClass = computed(() => {
  return ["t-button", props.type == "" ? "" : `t-button-${props.type}`];
});
</script>
<style lang="scss" scoped>
button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.t-button {
  button {
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
}
.t-button-default {
  button {
    background: #b4b0b0;
  }
}
.t-button-success {
  button {
    background: #0eac77;
  }
}
.t-button-warning {
  button {
    background: #ecb500;
  }
}
</style>
