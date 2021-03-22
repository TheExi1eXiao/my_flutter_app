<template>
    <van-tabbar route fixed>
        <template v-for='(item, index) in footList'>
            <van-tabbar-item :key="index" :icon="item.icon" :to="item.url">
                {{ item.value }}
            </van-tabbar-item>
        </template>
    </van-tabbar>
</template>

<script>

    const footList = [
        {
            icon: 'home-o',
            value: '主页',
            name: 'home',
            url: '/home',
        },
        {
            icon: 'friends-o',
            value: '我的',
            name: 'mine',
            url: '/mine',
        }
    ]

    export default {
        data() {
            return {
                footList: footList,
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>