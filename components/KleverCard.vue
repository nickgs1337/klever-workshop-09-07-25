<template>
  <div class="klever-card">
    <div v-if="icon" class="text-3xl mb-4">{{ icon }}</div>
    <h3 v-if="title" class="text-xl font-bold klever-gradient-text mb-2">{{ title }}</h3>
    <p v-if="description" class="text-gray-400">{{ description }}</p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String
})
</script>

<style scoped>
.klever-card {
  background: #1F1F1F;
  border: 1px solid #333333;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.klever-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(135deg, #AA33B5 0%, #2563EB 100%);
}

.klever-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(170, 51, 181, 0.3);
}

.klever-gradient-text {
  background: linear-gradient(135deg, #AA33B5 0%, #2563EB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>