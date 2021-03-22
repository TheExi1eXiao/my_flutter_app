<template>
    <div class="about-list">
        <template v-for="(item, index) in dataList">
            <div :key="index" class="list-item">
                {{ item.home }}
            </div>
        </template>
        
    </div>
</template>

<script>
    export default {
        props: {
            dataList: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        mounted() {
            console.log(this.dataList);
        }
    }
</script>

<style lang="less" scoped>
    .list-item {
        height: 90px;
    }
</style>