<script lang="ts" setup>
import { defineProps, type PropType } from "vue";
import {useRouter} from "vue-router"
const router = useRouter()
const props = defineProps({
    id: {
        type: [String, Number] as PropType<string | number>,
    },
    imgScr: {
        type: String,
    },
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
    techs: {
        type: Array as () => string[],
    },
    hover: {
        type: Boolean,
    }
})
const navigateTo = (id: string | number) => {
    if (id) {
        router.push(`/project/${String(id)}`);
    }
}
</script>
<template>
    <div >
        <div class="project_image" :class="{'hover': hover}">
            <NuxtImg :src="props.imgScr"/>
        </div>
        <div class="projet_content p-4">
            <h3 class="text-2xl">{{ props.title }}</h3>
            <p class="text-muted">{{ props.subtitle }}</p>
            <div class="row gap-2">
                <Chip v-for="tech in props.techs" :key="tech" :label="tech" class="text-sm"/>
            </div>
            <Button @click.stop="navigateTo(props.id ?? '')" :class="{'hover': hover}" size="md"  class="text-sm mt-3" appendIcon="arrow-right" variant="outlined">{{ $t('view_details') }}</Button>
        </div>

    </div>
</template>