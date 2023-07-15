<script setup lang="ts">
import type { Experience } from "@/types";

const educations: Experience[] = [
  {
    title: "Epitech - Paris",
    date: "2016 - 2021",
    skills: ["C", "C++", "Javascript", "SQL"],
    detail: "Detail",
  },
  {
    title: "Keimyung University - South Korea",
    date: "2019 - 2020",
    skills: ["Unity", "OpenGL", "Autodesk Maya"],
    detail: "Detail",
  },
];
</script>

<template>
  <div>
    <h2 class="font-bold md:text-4xl text-2xl dark:text-white">Education</h2>
    <article class="mt-8 flex flex-col gap-4 text-lg">
      <MyTimeline :elements="educations"></MyTimeline>
    </article>
  </div>
</template>
