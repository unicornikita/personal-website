<template>
  <div id="home" class="flex flex-col items-center justify-center min-h-screen">
    <img class="rounded-full h-auto max-w-xs shadow-xl mb-6" src="/assets/images/profile.jpg" alt="image description">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
      Nikita Galuh Kapušin</h1>
    <p class="mb-4 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-200">Flutter
      Developer</p>
    <button @click="downloadCV"
      class="mb-12 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-pink-950 rounded-lg hover:bg-pink-500 focus:ring-4 ">
      {{ $t('getMyCV') }}
    </button>
    <a href="#about"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="white" class="animate-bounce w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </svg></a>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const downloadCV = () => {
  const link = document.createElement('a')
  link.href = `./kapusin_nikitagaluh_cv_${locale.value}.pdf`
  link.download = `kapusin_nikitagaluh_cv_${locale.value}.pdf`
  link.target = '_blank'
  link.click()
}
</script>