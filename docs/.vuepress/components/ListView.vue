<template>
    <div class="list-view">
        <div :class="{ searchStyle: isCenter }">
            <!-- <slot name="search"></slot> -->
            <ListViewSearch></ListViewSearch>
            <div style="display:flex;justify-content:flex-end;margin-bottom:10px;">
                <el-button size="mini" :loading="loading" @click="searchPage" type="primary">搜索</el-button>
                <el-button  size="mini" @click="reset" type="warning" v-if="isReset">重置</el-button>
            </div>
        </div>
        <template>
            <slot name="operationBtn"></slot>
            <el-divider v-if="needCuttingLine"></el-divider>
            <Pagination :pageInfo="pageInfo" :pageSizes="pageSizes" @change="pageChange" v-if="isTopPagination" />
            <!-- <slot name="table"></slot> -->
            <ListViewTable></ListViewTable>
            <Pagination :pageInfo="pageInfo" :pageSizes="pageSizes" @change="pageChange" v-if="isPagination" />
        </template>
    </div>
</template>

<script>

export default {
    name: 'SlListView',
    props: {
        isReset: { type: Boolean, required: false, default: true },
        isPagination: { type: Boolean, required: false, default: true },
        isCenter: { type: Boolean, required: false, default: false },
        isTopPagination: { type: Boolean, required: false, default: false },
        pageSizes: {
            type: Array,
            default: () => [10, 20, 50, 100, 200]
        },
        paginationParams: {
            type: Object,
            default: () => {
                // pagesize, 每页条数
                // pageIndex, 当前页码
                // total 总数
            }
        },
        btnStyle: {
            // 按钮自定义位置
            type: Object,
            default: () => {
                return {}
            }
        },
        loading: { type: Boolean, required: false, default: false },
        needCuttingLine: {
            // 需要表格和筛选按钮间的分割线
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            pageInfo: {}
        }
    },
    watch: {
        paginationParams: {
            handler(newValue) {
                if(newValue) {
                    const { total, pageSize, pageIndex } = newValue
                    this.pageInfo = {
                        current: pageIndex,
                        pagenum: pageSize,
                        total: total,
                    }
                } else {
                    this.pageInfo = {
                        pageIndex: 1,
                        pageSize: 10,
                        total: 10
                    }
                }
            },
            immediate: true,
            deep: true
        }
    },
    mounted() {
        this.refresh()
    },
    methods: {
        pageChange(item) {
            this.$emit('gotoPage', item.pageSize, item.pageIndex)
        },
        searchPage() {
            this.$emit('gotoPage', this.pageSize, 1)
        },
        refresh() {
            this.$emit('gotoPage', this.pageSize, 1)
        },
        reset() {
            this.$emit('reset')
        }
    }
}
</script>

<style lang="scss" scoped>
.list-view {
    .searchStyle {
        display: flex;
        justify-content: 'flex-start';
        width: 100%;
    }
    .search-center-btn {
        width: 200px;
        display: flex;
        /deep/.el-button {
            height: 60%;
        }
    }
   
}
</style>
