<template>
    <div id="about" class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center mb-6">
            <h2 class="mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
                {{ $t('aboutMe') }}</h2>
            <p class="mb-4 text-justify text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-200">
                {{ $t('aboutMeIntro') }}</p>
            <p class="mb-4 text-justify text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-200">
                {{ $t('aboutMeCareer') }}</p>
            <p class="mb-6 text-justify text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-200">
                {{ $t('aboutMeHobbies') }}</p>
        </div>
    </div>
</template>