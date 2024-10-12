<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
const isActive = computed(() => frontmatter.value.home);

const spanStyle = computed(() => {
  const myColor1 = isActive.value ? 'var(--text)' : 'var(--pink)';
  const myColor2 = isActive.value ? 'var(--text)' : 'var(--purple)';
  return {
    '--myColor1': myColor1,
    '--myColor2': myColor2,
    backgroundImage: `linear-gradient(45deg, var(--myColor1), var(--myColor2))`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    transition: '--myColor1 0.2s ease-out, --myColor2 0.2s ease-in-out',
    fontSize: '3rem',
  };
});
</script>

<template>
  <a
    href="/"
    :class="`inline-block text-2xl font-black ${
      isActive ? '' : 'hover:scale-[1.02]'
    }`"
  >
    <span :style="spanStyle">{{ site.title }}</span>
  </a>
</template>
