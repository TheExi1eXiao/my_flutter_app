<template>
  <div id="app">
    <keep-alive v-if='$route.meta.keep'>
      <router-view/>
    </keep-alive>
    <router-view v-if='!$route.meta.keep' />
    <foot-bar v-show='$route.meta.showFoot' />
  </div>
</template>
<script>
  import { FootBar } from '@/components'
  export default {
    components: {
      FootBar
    }
  }
</script>

<style lang="less">

</style>
