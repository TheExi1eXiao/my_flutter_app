<template>
    <div class="login">

        <label for="">用户名：</label><input type="text" v-model="username">

        <label for="">密码：</label><input type="text" v-model="password">

        <div class='login-btn' @click="login">登录</div>
        <div class='login-btn' @click="toforgetpassword">忘记密码</div>

        <div class="toregister-btn" @click="toregister">还没有账号？去注册</div>
    </div>
</template>

<script>
    import { login } from '@/api'
    import userStore from '@/store/modules/user'
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login: async function () {
                await userStore.login({
                    username: this.username,
                    password: this.password,
                });
                setTimeout(() => {
                    this.$router.replace({ name: 'mine' })
                }, 500)
            },
            toregister: function () {
                this.$router.push({ name: 'register' })
            },
            toforgetpassword() {
                this.$router.push({ name: 'forget' })
            }
        }
    };
</script>

<style lang='less' scoped>

</style>