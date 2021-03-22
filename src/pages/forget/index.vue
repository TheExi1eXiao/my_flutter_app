<template>
    <div class="forget">
        <label for="">用户名：</label><input type="text" v-model="username">

        <label for="">密码：</label><input type="text" v-model="password">

        <label for="">确认密码：</label><input type="text" v-model="repassword">

        <div class="submit" @click="submit">提交</div>

    </div>
</template>

<script>
    import { forget } from '@/api'
    export default {
        data() {
            return {
                username: "",
                password: "",
                repassword: "",
            }
        },
        methods: {
            async submit() {
                let res = await forget({
                    username: this.username,
                    password: this.password
                })

                if (res.msg == 'success') {
                    this.$toast("修改密码成功")

                    setTimeout(() => {
                        this.$router.push({ name: 'login' })
                    }, 500)
                }
            }
        }
    }
</script>

<style>

</style>