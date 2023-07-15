<script setup>
useSeoMeta({
  title: "Guillaume Guerin",
  description: "A passionate developer who love to learn new things.",
  ogTitle: "Guillaume Guerin",
  ogDescription: "A passionate developer who love to learn new things.",
  ogImage: "/me.jpg",
  ogUrl: "https://lyliya.github.io",
  twitterTitle: "Guillaume Guerin",
  twitterDescription: "A passionate developer who love to learn new things.",
  twitterImage: "/me.jpg",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/laptop.png",
    },
  ],
});
</script>

<template>
  <div>
    <AppNavbar />
    <div class="flex justify-center w-full mt-20">
      <div
        class="flex flex-col justify-center items-start max-w-5xl w-full py-4 px-8 gap-8"
      >
        <MyInfo id="me" />
        <div class="grid md:grid-cols-2">
          <MyEducation id="education" />
          <MyExperience id="experiences" />
        </div>
        <MyProjects id="projects" />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: montserrat;
  src: url("/assets/Montserrat-VariableFont_wght.ttf");
}

html {
  @apply text-gray-700 dark:text-gray-200/75 bg-gray-200 dark:bg-[#050505] scroll-smooth;
  font-family: montserrat;
}

:target {
  @apply scroll-mt-20;
}
</style>
