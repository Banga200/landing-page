<script lang="ts" setup>
import {getServices, type ServiceItem} from "~/utils/landing-global";
const services: ServiceItem[] = getServices();
</script>
<template>
    <section class="bg-light-gray" id="services">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-5xl">{{ $t('services') }}</h2>
                <p>{{ $t('services_description') }}</p>
            </div>

            <div class="grid md-grid-cols-2 lg-grid-cols-4  gap-8">
                <ClientOnly>
                    <Card v-for="service in services" :key="service.title" class="colored">
                        <div class="p-6 text-start">
                            <Avatar :icon="service.icon" class="mb-3 rectangle" />
                            <h2 class="text-xl mb-3">{{ service.title }}</h2>
                            <p class="text-sm text-color-text-muted">{{ service.subTitle }}</p>
                        </div>
                    </Card>
                </ClientOnly>
            </div>
        </div>
    </section>
</template>