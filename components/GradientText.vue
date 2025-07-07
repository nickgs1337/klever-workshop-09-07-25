<template>
  <span class="klever-gradient-text">
    <slot />
  </span>
</template>

<style scoped>
.klever-gradient-text {
  background: linear-gradient(135deg, #AA33B5 0%, #2563EB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}
</style>