<template>
  <NavigationBar></NavigationBar>
  <div class="flex flex-col items-center justify-center bg-pink-800 px-8">

    <Home></Home>
    <About></About>
    <WorkExperience></WorkExperience>
    <Services></Services>
    <Links></Links>
    <Contact></Contact>
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
      content: "Nikita Galuh's personal portfolio"
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
      content: "Nikita Galuh"
    },
    {
      name: "og:description",
      content: "Nikita Galuh's personal portfolio"
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