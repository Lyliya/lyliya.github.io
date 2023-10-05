<script setup lang="ts">
import type { Experience } from "@/types";

const experiences: Experience[] = [
  {
    title: "Daneel",
    date: "2017 - 2021",
    skills: ["ERC20", "Blockchain", "NodeJS", "Solidity"],
    link: "https://daneel.io",
    detail:
      "Daneel is a smart personal assistant in cryptocurrencies. My work was to create the DAN token (ERC20) in solidity, help during the ICO, developer a REST API using NodeJS, Express and Sequelize and integrate ethers.js to allow ERC20 payment on web platform",
  },
  {
    title: "Kilometer",
    date: "2018 - 2021",
    skills: ["Ionic", "Angular", "NodeJS", "SQL", "AWS S3"],
    link: "https://kilometer.fr",
    detail:
      "Kilometer is an app that help track mileage for professionnal trips. My goal was to create an Ionic App to track users location and create GPS trips. Develop a REST API for the users managements and their journeys. And develop a script to create all the PDF files legally needed for the mileage expenses",
  },
  {
    title: "Assemblée",
    date: "2018 - 2021",
    skills: ["Jitsi-meet", "NodeJS", "WebRTC"],
    link: "https://assemblee.io",
    detail:
      "Assemblee is a french video conferencing website based on Jitsi-Meet. My goal was to create a REST API for the website using NodeJS, Express and Sequelize. Integrate Jitsi-Meet and manage the server deployment (Jitsi, recording, API, Web App)",
  },
  {
    title: "Lexboard",
    date: "2018 - 2021",
    skills: ["NodeJS", "Sequelize", "AWS S3"],
    link: "https://lexboard.fr",
    detail:
      "LexBoard helps businesses and law firms reduce the time spent on project management. My goal was to create a REST API using NodeJS, Express and Sequelize, Manage the SQL database and the file management (AWS S3)",
  },
  {
    title: "Jellysmack",
    date: "2022 - 2023",
    skills: ["NodeJS", "VueJS", "Tailwind", "Typescript"],
    link: "https://jellysmack.com/",
    detail:
      "Jellysmack help content creator grow their community on different social platform. My work was to make front-end for internal web apps using Vue 3, Typescript, Tailwind and Vite",
  },
  {
    title: "Prestashop",
    date: "2023 - 2023",
    skills: ["NodeJS", "VueJS", "Tailwind", "Typescript"],
    link: "https://prestashop.fr/",
    detail:
      "Creation of a component library using VueJS, Typescript and Tailwind based on a new design system for Prestashop",
  },
  {
    title: "PlayPlay",
    date: "2023 - present",
    skills: ["NodeJS", "VueJS", "Typescript"],
    link: "https://playplay.com/fr",
    detail:
      "Front-end developer to help improve user experiences creating videos",
  },
];
</script>

<template>
  <div>
    <h2 class="font-bold md:text-4xl text-2xl dark:text-white">Experiences</h2>

    <article class="mt-8 flex flex-col gap-4 text-lg">
      <MyTimeline :elements="experiences"></MyTimeline>
    </article>
  </div>
</template>
