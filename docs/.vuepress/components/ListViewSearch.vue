<template>
    <div class="search">
       <el-input v-model="listQuery.name" placeholder="请输入名称" style="margin-right:10px;"></el-input>
       <el-input v-model="listQuery.age" placeholder="清输入年龄"></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listQuery:{}
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style lang="scss">
.search{
    display: flex;
    margin: 10px;
}
</style>
