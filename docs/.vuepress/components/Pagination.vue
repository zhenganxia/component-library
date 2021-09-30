<template>
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page.pageIndex"
      :page-size.sync="page.pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      background
      :total="page.total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50]
    },
    pageInfo: {
      type: Object,
      default: () => {
        //   total, // 总数
        //   pageSize, // 每页条数
        //   pageIndex // 当前页数
      }
    }
  },
  data () {
    return {
      page: {}
    }
  },
  watch: {
    pageInfo: {
      handler (newValue) {
        if(newValue) {
            Object.assign(this.page,{
                ...newValue
            })
        } else {
            Object.assign(this.page,{
                total: 0,
                pageSize: 10,
                pageIndex: 1
            })
        }
      },
      immediate: true
    }
  },
  methods: {
    // 每页查看条数变化
    handleSizeChange (val) {
      this.page.pageSize = val
      this.$emit('pageChange', this.page)
    },
    // 当前页码变化
    handleCurrentChange () {
      console.log(11111)
      this.$emit('pageChange', this.page)
    }
  }
}
</script>
<style lang="scss">
.pagination {
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
}
</style>
