<script setup lang="ts">
defineProps({
  href: {
    type: String,
  },
});
</script>

<template>
  <a
    class="my-underline dark:hover:text-white hover:text-black transition-all border-b-2 border-b-black/20 hover:border-b-black dark:border-b-gray-200/30 dark:hover:border-b-gray-200"
    :href="href"
    target="_blank"
  >
    <slot></slot>
  </a>
</template>
