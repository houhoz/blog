<script setup lang="ts">
import { computed } from 'vue';
import Color from 'colorjs.io';

const props = defineProps<{
  title: string;
  date: number;
}>();

const staleness = computed(() => {
  const today = new Date();
  const firstPostDate = new Date(2018, 10, 30); // 2018-11-30
  const timeSinceFirstPost = today - firstPostDate;
  const timeSinceThisPost = today - new Date(props.date);
  return timeSinceThisPost / timeSinceFirstPost;
});

const lightRange = computed(() => {
  const lightStart = new Color('lab(63 59.32 -1.47)');
  const lightEnd = new Color('lab(33 42.09 -43.19)');
  return lightStart.range(lightEnd)(staleness.value).toString();
});

const darkRange = computed(() => {
  const darkStart = new Color('lab(81, 32.36, -7.02)');
  const darkEnd = new Color('lab(78, 19.97, -36.75)');
  return darkStart.range(darkEnd)(staleness.value).toString();
});
</script>
<template>
  <h2
    class="text-[28px] font-black text-[--lightLink] dark:text-[--darkLink]"
    :style="{
      '--lightLink': lightRange,
      '--darkLink': darkRange,
    }"
  >
    {{ title }}
  </h2>
</template>
