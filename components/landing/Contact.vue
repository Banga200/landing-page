<script lang="ts" setup>
import {type ContactItem, getContacts } from "~/utils/landing-global";
const contacts: ContactItem[] = getContacts();
</script>
<template>
    <section class="bg-light-gray" id="contact">
        <div class="container">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-6">
                    <h2 class="text-5xl">{{ $t('contact_us') }}</h2>
                    <p>{{ $t('contact_us_desc') }}</p>
                </div>
                <div class="grid md-grid-cols-3 gap-8 mx-auto">
                    <ClientOnly>
                        <Card v-for="contact in contacts" :key="contact.title" class="colored">
                            <div class="p-6 text-center ">
                                <Avatar :icon="contact.icon" class="mb-3 mx-auto" />
                                <h2 class="text-lg mb-3">{{ contact.title }}</h2>
                                <p class="text-sm text-color-text-muted">{{ contact.subTitle }}</p>
                            </div>
                        </Card>
                    </ClientOnly>
                </div>
            </div>

        </div>
    </section>
</template>