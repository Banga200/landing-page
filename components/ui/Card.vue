<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
    style: {
        type: Object,
        required: false
    }
})
const hover = ref(false)

const onEnter = () => hover.value = true
const onLeave = () => hover.value = false
</script>
<template>
    <div class="card" @mouseenter="onEnter" @mouseleave="onLeave" :style="props.style">
        <slot :hover="hover"/>
    </div>
</template>