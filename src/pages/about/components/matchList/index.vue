<template>
    <div class="match-list">
        <template v-for="(item, index) in data">
            <div :key="index">{{ item.rangqiu }}</div>
            <template v-for="(v, k) in item.oddsList">
                <div :key="k">
                    {{ v.label }}
                    {{ v.odds }}
                </div>
            </template>
            
        </template>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default() {
                return {

                }
            }
        }
    }
}
</script>

<style>

</style>