<template>
    <div class="register">
        <input type="text" v-model="username" class="text">
        <input type="text" v-model="password" class="text">
        <input type="text" v-model="phone" class="text">

        <div class="submit" @click="submit">注册</div>
    </div>
</template>

<script>
    import { register } from '@/api'
    export default {
        name: 'register',
        data() {
            return {
                username: '',
                password: '',
                phone: '',
            }
        },
        methods: {
            submit: function() {
                register({
                    username: this.username,
                    password: this.password,
                    phone: this.phone,
                }).then(res => {
                    console.log(res);
                    if (res.msg == 'success') {
                        this.$router.push({ name: 'login' })
                    }
                })
            }
        }
    }
</script>

<style>

</style>