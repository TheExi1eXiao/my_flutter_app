<template>
    <div class="more-list">
        <template v-if="noRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="finishedText"
                :error.sync="error"
                :error-text="errorText"
                @load="onLoad"
                :immediate-check="preLoad"
                offset="50"
            >
                <slot :dataList="dataList"></slot>
            </van-list>
        </template>

        <template v-else>
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    :finished-text="finishedText"
                    :error.sync="error"
                    :error-text="errorText"
                    @load="onLoad"
                    :immediate-check="preLoad"
                    offset="50"
                >
                    <slot :dataList="dataList"></slot>
                </van-list>
            </van-pull-refresh>
        </template>
        
    </div>
</template>

<script>
    import * as api from '@/api'
    export default {
        props: {
            api: {
                type: String,
                default: ""
            },
            params: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            finishedText: {
                type: String,
                default: "没有更多了",
            },
            errorText: {
                type: String,
                default: "请求失败，点击重新加载",
            },
            preLoad: {
                type: Boolean,
                default: true,
            },
            noRefresh: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                loading: false,
                finished: false,
                refreshing: false,
                error: false,
                dataList: [],
                page: 1,
                pageSize: 10,
            }
        },
        mounted() {
            !this.preLoad && this.onRefresh();
        },
        methods: {
            onLoad() {
                this.getData();
            },
            onRefresh() {
                this.finished = false;
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.page = 1;
                setTimeout(() => {
                    this.onLoad();
                }, 1000)
            },
            async getData() {
                let params = {
                    page: this.page,
                    pageSize: this.pageSize,
                    ...this.params
                }
                if (this.refreshing) {
                    this.dataList = [];
                    this.refreshing = false;
                }
                try {
                    let res = await api[this.api](params);
                    let total = this.page * this.pageSize;
                    if (total >= res.total) {
                        this.finished = true;
                    }
                    this.page += 1;
                    this.dataList = this.dataList.concat(res.data);
                    this.$emit('get-data', this.dataList);
                    
                } catch (error) {
                    this.error = true;
                }
                this.loading = false;
            }
        }
    }
</script>

<style>

</style>