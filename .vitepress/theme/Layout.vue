<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import HomeLink from './components/HomeLink.vue';
import { data as posts } from './posts.data';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();

document.body.className =
  'mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]';

console.log('posts', posts);
</script>

<template>
  <header className="mb-14 flex flex-row place-content-between">
    <HomeLink />
    <span className="relative top-[4px] italic">
      by
      <a href="https://danabra.mov" target="_blank">
        <img
          alt="Dan Abramov"
          src="https://github.com/gaearon.png"
          className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
        />
      </a>
    </span>
  </header>
  <div v-if="frontmatter.home">
    <div className="relative -top-[10px] flex flex-col gap-8">
      <a
        v-for="post in posts"
        key="{post.slug}"
        class="block py-4 hover:scale-[1.005]"
        :href="`/posts/${post.slug}.html`"
      >
        <article>
          <h2
            class="text-[28px] font-black text-[--lightLink] dark:text-[--darkLink]"
          >
            {{ post.title }}
          </h2>
          <p class="text-[13px] text-gray-700 dark:text-gray-300">
            January 4, 2024
          </p>
          <p class="mt-1">
            The limits of my language mean the limits of my world.
          </p>
          <!-- <PostTitle post="{post}" />
          <PostMeta post="{post}" />
          <PostSubtitle post="{post}" /> -->
        </article>
      </a>
    </div>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <Content />
  </div>
</template>
