<script lang="ts" setup>
import {type ContactItem, getContacts } from "~/utils/landing-global";
const contacts: ContactItem[] = getContacts();
</script>
<template>
    <footer>
        <div class="container">
            <div class="grid sm-grid-cols-2 md-grid-cols-3">
                <div>
                    <h2 class="text-lg mb-3">{{ $t('company_name') }} </h2>
                </div>
                <div class="links">
                    <h3 class="text-lg mb-3">روابط سريعة</h3>
                    <ul class="d-flex flex-column gap-2">
                        <li><NuxtLink to="#home">{{ $t('header.home') }}</NuxtLink></li>
                        <li><NuxtLink to="#services">{{ $t('header.services') }}</NuxtLink></li>
                        <li><NuxtLink to="#projects">{{ $t('header.projects') }}</NuxtLink></li>
                        <li><NuxtLink to="#contact">{{ $t('header.contact') }}</NuxtLink></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg mb-3">{{ $t('footer_links') }}</h3>
                    <div class="d-flex">
                        <ClientOnly>
                            <a v-for="contact in contacts" :key="contact.title" :href="contact.href" target="_blank" rel="noopener noreferrer">
                                <Avatar :icon="contact.icon" class="mx-1" :hover="true"/>
                            </a>    
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>