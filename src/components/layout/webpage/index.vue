<template>
    <div class="web-page">
        <header-bar
            :title="title"
            :leftText="leftText"
            :rightText="rightText"
            :leftArrow="leftArrow"
            @on-left-click="onLeftClick"
            @on-right-click="onRightClick"
        />
        <slot></slot>
    </div>
</template>

<script>
    import { HeaderBar } from '@/components/common'
    export default {
        props: {
            title: {
                type: String,
                default: '标题',
            },
            leftText: {
                type: String,
                default: '',
            },
            rightText: {
                type: String,
                default: '',
            },
            leftArrow: {
                type: Boolean,
                default: true,
            }
        },
        components: {
            HeaderBar,
        },
        methods: {
            onLeftClick: function () {
                this.$router.back();
            },
            onRightClick: function() {

            }
        }

    }
</script>

<style>

</style>