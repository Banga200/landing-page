<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: false
    },
    preappendIcon: {
        type: [Object, String],
        required: false
    },
    appendIcon: {
        type: [Object, String],
        required: false
    },
    size: {
        type: String,
        required: false,
    },
    variant: {
        type: String,
        required: false,
        default: 'primary' // primary, secondary, tertiary
    },
    onlyIcon: {
        type: Boolean
    }
});
</script>
<template>
    <button :class="[size, variant, onlyIcon]">
        <component :is="preappendIcon" v-if="preappendIcon" />
        <span v-if="text"></span>
        <slot />
        <component :is="appendIcon" v-if="appendIcon" />
    </button>
</template>