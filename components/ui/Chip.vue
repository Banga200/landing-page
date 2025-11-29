<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
    },
    rectangle: {
        type: Boolean
    }
})
</script>
<template>
    <div class="chip" :class="{'rectangle': rectangle}">
        {{ props.label }}
        <slot></slot>
    </div>
</template>