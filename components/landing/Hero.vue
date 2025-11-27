<script setup lang="ts">
import { getStats,type StatItem } from "~/utils/landing-global";
const stats: StatItem[] = getStats();
</script>

<template>
  <section id="home">
    <div class="container">
      <div class="hero">
        <div class="mb-6">
          <h1 class="mb-1 text-6xl">{{ $t("hero.title") }}</h1>
          <p class="text-xl mx-auto">{{ $t("hero.subtitle") }}</p>
        </div>
        <Button size="lg" class="text-lg mb-6">{{
          $t("hero.get_quote")
        }}</Button>
        <div class="grid md-grid-cols-3 mt-3 gap-8">
          <Card v-for="stat in stats" :key="stat.title">
            <div class="p-6 text-center mx-auto">
              <Avatar :icon="stat.icon" class="mb-3 mx-auto" />
              <h2 class="text-3xl text-primary">{{ stat.value }}</h2>
              <p class="text-sm text-color-text-muted">{{ stat.title }}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
