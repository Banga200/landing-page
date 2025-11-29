<script lang="ts" setup>
import {  onMounted, ref } from "vue";
import {useRoute, useRouter} from "vue-router"
import { getProjects, type ProjectItem } from "~/utils/landing-global";
const router = useRouter()
const project = ref<ProjectItem | undefined>(undefined)
onMounted(()=> {
const route = useRoute();
const projects: ProjectItem[] = getProjects();
project.value = projects.find((p) => String(p.id) === route.params.id);
})
</script>
<template>
    <section>
        <div class="container">
            <ClientOnly>
                <article>
                    <Button variant="text" size="md" preappend-icon="arrow-left" @click="router.back">
                        {{ $t("back_to_projects") }}
                    </Button>
                    <div v-if="project" class="mt-6">
                        <h1 class="text-4xl mb-3">{{ project.title }}</h1>
                        <div class="h-96">
                            <NuxtImg :src="project.imageUrl" class="w-full h-full" height="100%"/>
                        </div>
                        <div class="grid md-grid-cols-3 gap-6 mb-5  mt-6">
                            <Card v-for="stat in project.stats" :key="stat.title">
                                <div class="p-6 text-center ">
                                    <Avatar :icon="stat.icon" class="mb-3 mx-auto" />
                                    <h2 class="text-3xl mb-3 text-primary">{{ stat.value }}</h2>
                                    <p class="text-sm text-color-text-muted">{{ stat.title }}</p>
                                </div>
                            </Card>
                        </div>
                        <Card class="mb-5 mt-6">
                            <h2 class="text-2xl mb-3">{{ $t('overview') }}</h2>
                            <p>{{ project.description }}</p>
                        </Card>
                        <Card class="mb-5">
                            <h2 class="text-2xl mb-3">{{ $t('technologies_used') }}</h2>
                            <div class="row gap-3">
                                <Chip v-for="tech in project.techs" :key="tech" :rectangle="true">{{ tech }}</Chip>
                            </div>
                        </Card>
                    </div>
                </article>
            </ClientOnly>
        </div>
    </section>
</template>