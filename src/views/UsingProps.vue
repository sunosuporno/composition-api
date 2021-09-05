<template>
  <div class="posts">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
    <button>Delete a post</button>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
// component imports
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";
export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style>
.posts {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
