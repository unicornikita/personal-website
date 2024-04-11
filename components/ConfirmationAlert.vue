<script setup lang="ts">

const props = defineProps({
    isOpen: Boolean
});

const emit = defineEmits(['update:isOpen']);

const updateIsOpen = (value: boolean) => {
    emit('update:isOpen', value);
}
</script>

<template>
    <div v-if="isOpen" @click="updateIsOpen(false)" class="bg-gray-700 bg-opacity-75 transition-opacity fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div
                class="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-pink-700 px-4 py-4 sm:p-4 sm:pb-4">
                    <div class="sm:flex sm:items-center items-center">
                        <div class="text-center sm:text-center">
                            <h1 class="text-base font-semibold leading-6 text-white" id="modal-title">
                                {{ $t('alertTitle') }}
                            </h1>
                            <div class="flex justify-center my-4">
                                <img class="h-auto w-24" src="/assets/icons/check_icon.svg" alt="image description">
                            </div>
                            <div>
                                <p class="text-sm text-gray-200">{{ $t('alertMessage') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
