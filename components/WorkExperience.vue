<template>
    <div id="work-experience" class="flex flex-col items-center justify-center mb-6 text-justify">
      <h2 class="mb-6 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
        {{ $t('workExperience') }}</h2>
      <ul class="list-disc mb-4">
        <li class="text-white text-lg lg:text-lg font-normal">1. 2. 2024 - {{ $t('present') }}: Freelance @ GaluhTech, Nikita Galuh Kapušin s.p.</li>
        <li class="text-white text-lg lg:text-lg font-normal">11. 6. 2023 - 10. 8. 2024: Flutter Developer @ GoOpti</li>
        <li class="text-white text-lg lg:text-lg font-normal">16. 9. 2023 - {{ $t('present') }}: Freelance @ DigiEd</li>
        <li class="text-white text-lg lg:text-lg font-normal">1. 8. 2022 - 30. 4. 2023: Mobile and Web Developer @ Achtzig20</li>
        <li class="text-white text-lg lg:text-xl font-normal">31. 3. 2022 - 1. 5. 2022: Web Developer @ bPlanet d.o.o</li>
      </ul>
      <a :href="`./kapusin_nikitagaluh_cv_${locale}.pdf`" target="_blank"
        class="mb-6 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-pink-950 rounded-lg hover:bg-pink-500 focus:ring-4 ">
        {{ $t('viewFullCV') }}
      </a>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>