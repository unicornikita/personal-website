<template>
    <div class="flex w-full flex-col justify-center items-center mb-6">
        <div id="services">
            <h2 class="mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
                {{ $t('services') }}</h2>
        </div>
        <div class="flex flex-wrap w-full mb-6 justify-between">
            <div class="flex flex-col w-full md:w-1/3 items-center justify-center">
                <div class="mb-4">
                    <img class="h-auto max-w-xs mb-4 w-48" src="/assets/icons/mobile.svg"
                        alt="image description">
                </div>
                <h3 class="mb-2 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl text-white">
                    {{ $t('mobileDevelopment') }}</h3>
                <p class="mb-4 text-lg font-normal text-gray-200">Flutter, Kotlin or Swift</p>
            </div>
            <div class="flex flex-col w-full md:w-1/3 items-center justify-center">
                <div class="mb-4">
                    <img class="h-auto max-w-xs mb-4 w-48" src="/assets/icons/desktop.svg"
                        alt="image description">
                </div>
                <h3 class="mb-2 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl text-white">
                    {{ $t('webDevelopment') }}</h3>
                <p class="mb-4 text-lg font-normal text-gray-200">WordPress, Nuxt.js, Tailwind CSS</p>
            </div>
            <div class="flex flex-col w-full md:w-1/3 items-center justify-center">
                <div class="mb-4">
                    <img class="h-auto max-w-xs mb-4 w-48" src="/assets/icons/design.svg"
                        alt="image description">
                </div>
                <h3 class="mb-2 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl text-white">
                    {{ $t('uiUxDesign') }}</h3>
                <p class="mb-4 text-lg font-normal text-gray-200">Figma, Adobe XD</p>
            </div>
        </div>
    </div>
</template>