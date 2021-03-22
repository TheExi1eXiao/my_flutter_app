<template>
    <div class="header">
        <van-nav-bar
            :title="title"
            :left-text="leftText"
            :right-text="rightText"
            :left-arrow="leftArrow"
            @click-left="onClickLeft"
            @click-right="onClickRight"
            fixed
        />
    </div>
</template>

<script>
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
        methods: {
            onClickLeft: function() {
                this.$emit("on-left-click");
            },
            onClickRight: function() {
                this.$emit("on-click-right");
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/style/variable.less';
    .header {
        height: 44px;
        background-color: @demo;
        // display: flex;
        // justify-content: center;
        // align-self: center;
    }
</style>