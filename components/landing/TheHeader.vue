<script  setup>
import { ref, onMounted, onUnmounted } from "vue"
import { useI18n } from "vue-i18n"
import {useRouter, useRoute} from "vue-router"
import Button from "../ui/Button.vue"
const router = useRouter()
const route = useRoute()
const {locale } = useI18n()
const scrolled = ref(false)
const toggleNavMenu = ref(false)
const onScroll = () => {
  scrolled.value = window.scrollY >= 100
}

onMounted(() => {
    window.addEventListener("click", () => {toggleNavMenu.value = false})
    window.addEventListener("scroll", onScroll)
})
onUnmounted(() => window.removeEventListener("scroll", onScroll))

const changeLang = () => {
    const lang = locale.value === 'ar' ? 'en' : 'ar'

    // Use Nuxt i18n helper to generate the correct path
    // This ensures the lazy-loaded locale file is fetched
    const switchLocalePath = useSwitchLocalePath()
    const path = switchLocalePath(lang)
    updateDirection(lang)
    if (path) router.push(path)
}
const toggleNav = () => {
    toggleNavMenu.value = !toggleNavMenu.value
}
</script>
<template>
    <header :class="{ 'scrolled': scrolled }">
        <div class="container d-flex flex-between align-center ">
            <!-- logo  -->
            <div id="logo" class="text-xl">
                 {{ $t('company_name') }}
            </div>
            <!-- nav  -->
            <Navs class="navs"/>
            <!-- Lang  -->
            <ClientOnly>
                <div class="d-flex align-center">
                    <Button variant="text" size="md" preappend-icon="languages" @click="changeLang">
                        {{ $t('header.language') }}
                    </Button>
                    <Button variant="text" size="md" preappend-icon="menu" class="isMobile" :onlyIcon="true" @click.stop="toggleNav"></Button>
                </div>
            </ClientOnly>
        </div>
          <transition name="slide">
            <Navs class="mobile-navs" v-if="toggleNavMenu"  @link-click="toggleNavMenu = false"/>
          </transition>
    </header>
</template>