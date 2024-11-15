<template>
  <NavigationBar></NavigationBar>
  <div class="flex flex-col items-center justify-center bg-pink-800 px-8">
    <NuxtPage/>
  </div>
  <Footer></Footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Raleway", sans-serif;
}
</style>

<script setup lang="ts">
useHead({
  title: "Nikita Galuh Kapušin",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }
  ],
  meta: [
    {
      name: "description",
      content: "Hi! I am Nikita Galuh, primarily a Flutter Developer based in Slovenia. My interest in computer science and programming sparked in my early teens with inspiration from playing video games after school and relatives, who studied computer science. In August 2024 I graduated from University of Ljubljana, Faculty of Computer and Information Science."
    },
    {
      name: "keywords",
      content: "Nikita Galuh, portfolio, personal, developer, software, engineer, web, developer, front-end, programmer, mobile, flutter"
    },
    {
      name: "author",
      content: "Nikita Galuh Kapušin"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    },
    {
      name: "robots",
      content: "index, follow"
    },
    {
      name: "og:title",
      content: "Nikita Galuh Kapušin"
    },
    {
      name: "og:description",
      content: "Hi! I am Nikita Galuh, primarily a Flutter Developer based in Slovenia. My interest in computer science and programming sparked in my early teens with inspiration from playing video games after school and relatives, who studied computer science. In August 2024 I graduated from University of Ljubljana, Faculty of Computer and Information Science."
    },
    {
      name: "og:site_name",
      content: "Nikita Galuh Kapušin"
    },
    {
      name: "og:type",
      content: "website"
    },
  ]
});
</script>