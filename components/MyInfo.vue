<script setup lang="ts">
const socials = [
  {
    title: "Github",
    icon: "uil:github",
    link: "https://github.com/Lyliya",
  },
  {
    title: "Linkedin",
    icon: "uil:linkedin",
    link: "https://www.linkedin.com/in/guillaume-guerin/",
  },
  {
    title: "Twitter",
    icon: "uil:twitter",
    link: "https://twitter.com/Lyliiya",
  },
  {
    title: "Mail",
    icon: "uil:envelope",
    link: "mailto:guerin.dev@gmail.com",
  },
];
</script>

<template>
  <div>
    <h1 class="font-bold md:text-4xl text-2xl dark:text-white">
      Hi, I'm Guillaume !
    </h1>

    <main class="mt-8 flex flex-col gap-4 text-lg">
      <p>A passionate developer who love to learn new things.</p>

      <p>
        I graduated from
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >Epitech Paris</span
        >
        in 2021 where I learned development, espacially in
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >C, C++ and Javascript</span
        >.
      </p>

      <p>
        During my studies, I started working as a
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >Freelancer</span
        >, by creating
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >back-end services</span
        >
        in
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >NodeJS</span
        >
        for businesses.
      </p>

      <p>
        At the end of my studies, I wanted to discover new things, and learn
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >Vue JS</span
        >
        to enter the world of front-end development.
      </p>

      <p>
        A little later, I joined
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >Jellysmack</span
        >
        as a front-end developer for one year.
      </p>

      <p>
        Unfortunatly, this experience wont last long. I take this as an
        opportunity to test my skills in other compagnies, joining
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >Prestashop</span
        >
        to help them work on their
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >component library</span
        >.
      </p>

      <p>
        This opportunity was stopped shortly after.
        <span class="dark:text-white dark:font-normal text-black font-semibold"
          >I'm currently looking for a new job</span
        >.
      </p>

      <div class="flex flex-col gap-1">
        <p>You can find or contact me on</p>
        <div class="flex flex-wrap gap-4">
          <MyLink
            v-for="social of socials"
            :key="social.title"
            :href="social.link"
          >
            <Icon :name="social.icon" :title="social.title" size="20px" />
            <span>{{ social.title }}</span>
          </MyLink>
        </div>
      </div>
    </main>
  </div>
</template>
