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
    <div>
        <UModal :modelValue="isOpen" @update:modelValue="updateIsOpen">
            <div class="flex flex-col text-center justify-center items-center py-8 px-8 bg-pink-700 rounded">
                <h1>{{ $t('alertTitle') }}</h1> 
                <img class="h-auto max-w-xs w-24 my-4" src="/assets/icons/check_icon.svg"
                    alt="image description">
                <h3>{{ $t('alertMessage') }}</h3>
            </div>
        </UModal>
    </div>
</template>
