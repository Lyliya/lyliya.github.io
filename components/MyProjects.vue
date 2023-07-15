<script setup lang="ts">
import type { Project } from "../types/index";
const projects: Project[] = [
  {
    title: "RocketStats",
    body: "RocketStats is a Rocket League plugin working with bakkesmod, allowing you to display session information (MMR / Win and losses, streak) in game and/or in OBS. It was created with the help of Nusa, and it's now maintained by the community.",
    image: "../assets/rocketstats.png",
    actions: [
      {
        text: "Github",
        link: "https://github.com/Lyliya/RocketStats",
        icon: "uil:github",
      },
      {
        text: "Website",
        link: "https://bakkesplugins.com/plugins/view/30",
        icon: "uil:external-link-alt",
      },
    ],
    skills: ["C++"],
  },
  {
    title: "Highlights",
    body: "Highlights allows you to fill idle moments of your streams with a compilation of your clips. Create entertainment during your start screen, during a hydration break or a scene setup.",
    image: "../assets/highlights.png",
    actions: [
      {
        text: "Website",
        link: "https://highlights.lyliya.fr",
        icon: "uil:external-link-alt",
      },
    ],
    skills: ["NodeJS", "Vue 3", "Vuestic UI"],
  },
  {
    title: "Homebridge Ledstrip BLE",
    body: "I am too lazy to move to the ledstrip button and too poor to buy one with Apple Homekit already included. So i made mine, using Homebridge, NodeJS and a bluetooth USB adapter. It allow me to control my ledstrips with my voice using Siri and the Homepod. It handle on/off, brightness and color.",
    image: "../assets/led.jpg",
    actions: [
      {
        text: "Github",
        link: "https://github.com/Lyliya/homebridge-ledstrip-ble",
        icon: "uil:github",
      },
    ],
    skills: ["NodeJS", "BLE"],
  },
  {
    title: "PB² Website",
    body: "This website regroup all twitch streams of the PB² group, a speedrun community i'm part of. You can see who is streaming and which game, watch their stream and interact with them. It also handle the 'Zapping', a compilation of our fun clips created during our streams. An admin panel allow us to manager those clips.",
    image: "../assets/pb2website.png",
    actions: [
      {
        text: "Website",
        link: "https://pbdeuxtv.fr/",
        icon: "uil:external-link-alt",
      },
    ],
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "48h du PB website",
    body: "This is a website for a speedrun community event called '48h du PB' where we, as a community, try to beat as many Personal Best or Word record as possible in a 48-hour period. This website help logging beaten times and twitch streams of the participants",
    image: "../assets/48hpb.png",
    actions: [
      {
        text: "Website",
        link: "https://48h.pbdeuxtv.fr/",
        icon: "uil:external-link-alt",
      },
    ],
    skills: ["Typescript", "Vue 3", "SQL", "Koa"],
  },
  {
    title: "Portal Twitch%",
    body: "Portal Twitch% was my first NodeJS 'real project'. It's a Portal add-on created for speedrun marathon including twitch integration within the game. Viewer can vote for commands that are exectuded in the game, disturbing the runner. It was featured in many speedrun marathon (BLR, Speedons, ...)",
    image: "../assets/portal.jpg",
    actions: [
      {
        text: "Video",
        link: "https://www.youtube.com/watch?v=fkyDq14BXuE",
        icon: "uil:film",
      },
    ],
    skills: ["NodeJS"],
  },
  {
    title: "Portfolio",
    body: "This is the one you're reading right now. Kinda cool right ?",
    image: "../assets/portfolio.png",
    actions: [],
    skills: ["Typescript", "VueJS", "Nuxt 3"],
  },
];
</script>

<template>
  <div>
    <h2 class="font-bold md:text-4xl text-2xl dark:text-white">Projects</h2>
    <section class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
      <MyCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :body="project.body"
        :image="project.image"
        :actions="project.actions"
        :skills="project.skills"
      />
    </section>
  </div>
</template>
