<script setup lang="ts">
import { PropType } from "vue";
import type { Experience } from "@/types";
defineProps({
  elements: {
    type: Array as PropType<Experience[]>,
    required: true,
  },
});
</script>

<template>
  <div>
    <ul class="timeline list-none relative">
      <li v-for="element in elements" class="m-5 pl-5">
        <div class="flex items-center">
          <p
            class="px-4 text-xl dark:text-white dark:font-normal font-semibold text-black"
          >
            {{ element.title }}

            <span class="text-sm text-gray-800 dark:text-gray-200/75">{{
              element.date
            }}</span>
          </p>
          <a
            v-if="element.link"
            :href="element.link"
            target="_blank"
            class="text-gray-800 dark:text-gray-200/75 text-sm dark:hover:text-white hover:text-black transition-all"
          >
            <Icon name="uil:external-link-alt" size="20" />
          </a>
        </div>
        <div class="flex flex-wrap gap-2 mx-4 my-2">
          <MyBadge v-for="skill in element.skills" :key="skill" :text="skill" />
        </div>
        <p class="px-4 mt-2">{{ element.detail }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.timeline > li:before {
  content: " ";
  background: rgb(122, 50, 122);
  display: inline-block;
  position: absolute;
  border: 2px solid #fff;
  border-radius: 50%;
  left: 18px;
  margin-top: 5px;
  width: 25px;
  height: 25px;
}

.timeline:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 93%;
  margin-top: 20px;
}
</style>
