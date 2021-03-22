<template>
  <div class="home">
    111
    <div @click="toAboutPage"> about page</div>
    <div>{{ "2020-03-03 12:30:05" | time2HHmm }}</div>
    <div>{{ "2020-07-09 12:30:05" | time2day}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { home } from '@/api'
export default {
  name: 'home',
  data() {
    return {
      dataList: [],
    }
  },
  methods: {
    toAboutPage: function() {
      this.$router.push({ name: 'about', params: { a: 1 } })
    },
  }
}
</script>

<style lang="less" scoped>

  .text {
    font-size: 37.5px;
    color: red;
  }
  .home {
    .text
  }
</style>