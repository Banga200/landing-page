<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
    },
})
</script>
<template>
    <div class="chip">
        {{ props.label }}
        <slot></slot>
    </div>
</template>