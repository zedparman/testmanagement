<template>
  <div>
<h1>hello</h1>
<div v-for="(item, index) in posts" :key="index">
  {{ item.title }}
</div>

  <div v-for='post in posts' :key='post.id'>
  <h3>Post Title: </h3>  {{post.title}}
      <h3>Post Body: </h3>  {{post.body}}
    </div>

    <!-- <h1>{{ msg }}</h1>
    <div v-for='post in posts' :key='post.id'>
  <h3>Post Title: </h3>  {{post.title}}
      <h3>Post Body: </h3>  {{post.body}}
    </div>
    <h2>Essential Links</h2> -->
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
name: 'app',
mounted() {
this.$store.dispatch('loadPosts')
},
computed: {
...mapState([
'posts'
])
}
}













// export default {
//   name: 'myStore',
//   data () {
//     return {
//       msg: 'Welcome to my Vuex Store'
//     }
//   },
//   computed: {
//     posts() {
//     return this.$store.state.posts
//     }
//   },
//   mounted() {
//     this.$store.dispatch("getPosts");
//   }
// }
</script>

<style scoped>

</style>