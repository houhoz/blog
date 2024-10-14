<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import HomeLink from './components/HomeLink.vue';
import PostTitle from './components/PostTitle.vue';
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
        :key="post.url"
        class="block py-4 hover:scale-[1.005]"
        :href="post.url"
      >
        <article>
          <PostTitle :title="post.title" :date="post.date.time" />
          <p className="text-[13px] text-gray-700 dark:text-gray-300">
            {{
              new Date(post.date.time).toLocaleDateString('en', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
            }}
          </p>
          <p class="mt-1" v-html="post.excerpt"></p>
        </article>
      </a>
    </div>
  </div>
  <div v-else>
    <Content class="prose dark:prose-invert pt-10 pb-8" />
  </div>
</template>
