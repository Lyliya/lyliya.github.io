<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="px-2 py-1 text-xs text-white font-semibold bg-purple-900 rounded"
    >{{ text }}
  </span>
</template>
