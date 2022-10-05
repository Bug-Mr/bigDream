<template>
  <div :class="tClass">
    <button><slot></slot></button>
  </div>
</template>
<script setup name="mButton">
import { computed } from "vue";

// name script不能为空
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
});
const tClass = computed(() => {
  return ["m-button", props.type == "" ? "" : `m-button-${props.type}`];
});
</script>
<style lang="scss" scoped>
button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.m-button {
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
.m-button-default {
  button {
    background: #b4b0b0;
  }
}
.m-button-success {
  button {
    background: #0eac77;
  }
}
.m-button-warning {
  button {
    background: #ecb500;
  }
}
</style>
