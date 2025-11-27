<script setup lang="ts">
const props = defineProps({
    icon: {
        type: [Object, String],
        required: false
    },
    rectangle: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: 'primary'
    }
});
</script>

<template>
    <div :class="['avatar', { 'rectangle': rectangle }, color]">
        <component :is="icon" v-if="icon" />
    </div>
</template>