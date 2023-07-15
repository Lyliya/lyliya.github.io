<script setup lang="ts">
import type { PropType } from "vue";
import type { Action } from "../types/index";

defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  actions: {
    type: Array as PropType<Action[]>,
    required: false,
  },
  skills: {
    type: Array<string>,
    required: true,
  },
});
</script>

<template>
  <div class="rounded">
    <div class="relative">
      <img :src="image" alt="" class="rounded-t w-full h-48 object-cover" />
      <div class="absolute top-2 left-2 flex gap-2">
        <MyBadge v-for="skill in skills" :key="skill" :text="skill" />
      </div>
    </div>
    <div class="p-4 flex gap-2 flex-col">
      <div class="flex justify-between">
        <p class="text-lg font-semibold dark:text-white text-black">
          {{ title }}
        </p>
        <div v-if="actions" class="flex gap-2 items-center">
          <a
            v-for="action in actions"
            class="dark:hover:text-white hover:text-black transition-all"
            :href="action.link"
            target="_blank"
          >
            <Icon :name="action.icon" size="20" />
          </a>
        </div>
      </div>
      <p class="text-sm">{{ body }}</p>
    </div>
  </div>
</template>
