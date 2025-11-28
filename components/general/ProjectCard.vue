<script lang="ts" setup>
const props = defineProps({
    imgScr: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    techs: {
        type: Array as () => string[],
    },
    hover: {
        type: Boolean,
    }
})
</script>
<template>
    <div >
        <div class="project_image" :class="{'hover': hover}">
            <NuxtImg :src="props.imgScr"/>
        </div>
        <div class="projet_content p-4">
            <h3 class="text-2xl">{{ props.title }}</h3>
            <p class="text-muted">{{ props.description }}</p>
            <div class="d-flex gap-2">
                <Chip v-for="tech in props.techs" :key="tech" :label="tech" class="text-sm"/>
            </div>
            <Button :class="{'hover': hover}" class="text-sm mt-3" appendIcon="arrow-right" variant="outlined">{{ $t('view_details') }}</Button>
        </div>

    </div>
</template>