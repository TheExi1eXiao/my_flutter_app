<template>
    <div class="mine">
        <div>欢迎 {{userInfo.username}}</div>
    </div>
</template>

<script>
    import userStore from '@/store/modules/user'
    export default {
        name: 'Mine',
        data() {
            return {

            }
        },
        components: {
            
        },
        computed: {
            isLogin: function () {
                return userStore.isLogin;
            },
            userInfo: function () {
                return userStore.userInfo;
            }
        },
        beforeRouteEnter: function(to, from, next) {
            next((vm) => {
                if (!vm.isLogin) {
                    vm.$router.push({ name: 'login' })
                }
            })
        }

    }
</script>

<style scoped lang="less">
    @import '~@/style/index.less';
    .mine {
        color: @demo;
    }
</style>