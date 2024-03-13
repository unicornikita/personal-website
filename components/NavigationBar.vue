<script setup lang="ts">
const { locale } = useI18n();
const isOpen = ref(false);
const openHamburger = () => {
    isOpen.value = !isOpen.value;
};
const languages = ref([
    {
        name: 'en',
        flag: 'gb',
        text: 'English'
    },
    {
        name: 'slo',
        flag: 'si',
        text: 'Slovenščina'
    }
]);
const changeLanguage = (language: string) => {
    locale.value = language;
};

</script>
<template>
    <nav class="bg-pink-900 shadow-sm w-full">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false" @click="openHamburger">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:ml-6 sm:block w-full">
                        <div class="flex w-full">
                            <a href="#about" class="hover:bg-pink-500 text-white rounded-md px-3 py-2 text-sm font-medium"
                                aria-current="page">{{ $t('aboutMe') }}</a>
                            <a href="#work-experience"
                                class="text-gray-200 hover:bg-pink-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{
                            $t('workExperience') }}</a>
                            <a href="#services"
                                class="text-gray-200 hover:bg-pink-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{
                            $t('services') }}
                            </a>
                            <a href="#links"
                                class="text-gray-200 hover:bg-pink-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{
                            $t('links') }}</a>
                            <a href="#contact"
                                class="text-gray-200 hover:bg-pink-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{
                            $t('getInTouch') }}</a>
                            <div class="flex-1"></div>
                            <div class="text-black hover:text-black text-sm font-medium">
                                <div class="flex flex-col justify-end items-end">
                                    <div class="cursor-pointer text-gray-200 rounded-md text-sm font-medium"
                                        v-for="language in languages" @click="changeLanguage(language.name)">{{
                            language.text }} <span class="fi" :class="'fi-' + language.flag"></span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile menu, show/hide based on menu state. -->
        <div v-if="isOpen" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2 flex flex-col absolute bg-pink-900 w-full ">
                <a href="#about" class="bg-pink-500 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page">About
                    Me</a>
                <a href="#work-experience"
                    class="text-gray-200 hover:bg-pink-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{
                            $t('workExperience') }}</a>
                <a href="#services"
                    class="text-gray-200 hover:bg-pink-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{
                            $t('services') }}
                </a>
                <a href="#links"
                    class="text-gray-200 hover:bg-pink-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{
                            $t('links') }}</a>
                <a href="#contact"
                    class="text-gray-200 hover:bg-pink-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{{
                            $t('getInTouch') }}</a>
                <div class="text-black hover:text-black text-sm font-medium">
                    <div class="flex flex-col items-start sm:items-end">
                        <div class="cursor-pointer px-3 py-2 text-gray-200 hover:bg-pink-500 hover:text-white rounded-md text-sm font-medium w-full"
                            v-for="language in languages" @click="changeLanguage(language.name)">{{ language.text }}
                            <span class="fi" :class="'fi-' + language.flag"></span> </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>