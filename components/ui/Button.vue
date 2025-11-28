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
        default: 'md' // sm, md, lg
    },
    variant: {
        type: String,
        required: false,
        default: 'primary' // primary, secondary, tertiary
    }
});
</script>
<template>
    <button :class="[size, variant]">
        <div class="icon">
            <component :is="preappendIcon" v-if="preappendIcon" />
        </div>
        <span><slot /></span>
        <component :is="appendIcon" v-if="appendIcon" />
    </button>
</template>