<script setup>
const {locale} = useI18n();
onMounted(() => {
  updateDirection(locale.value)
})
</script>
<template>
  <div>
   <NuxtLayout>
     <NuxtRouteAnnouncer />
      <NuxtPage />
      <ClientOnly>
        <a href="https://wa.me/+966501234567" target="_blank">
          <Button append-icon="message-circle" class="float-button"/>
        </a>
      </ClientOnly>
   </NuxtLayout>
  </div>
</template>
