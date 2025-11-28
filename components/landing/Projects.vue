<script lang="ts" setup>
import { getProjects, ProjectItem } from "~/utils/landing-global";

const projects: ProjectItem[] = getProjects();
</script>
<template>
    <section>
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-5xl">{{ $t('projects') }}</h2>
                <p>{{ $t('projects_description') }}</p>
            </div>
            <div class="grid md-grid-cols-2 gap-8">
                <Card v-slot="{ hover }" v-for="project in projects" :key="project.title" :style="{'padding': '0px'}">
                    <ProjectCard :hover="hover" :imgScr="project.imageUrl" :title="project.title" 
                    :description="project.description" :techs="project.techs" />
                </Card>
            </div>
        </div>
    </section>
</template>