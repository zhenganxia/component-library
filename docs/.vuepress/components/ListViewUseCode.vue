<template>
  <SlListView
    :paginationParams="page"
    @gotoPage="gotoPage"
    @reset="reset"
    ref="listView"
  >
    <template #search>
      <input  v-model="listQuery" />
    </template>
    <template #operationBtn>
      <div class="batch">
        <el-button type="danger">批量拒绝</el-button>
      </div>
    </template>

    <SlTableInfo
        :columns="columns"
        :tableData="tableData"
    >
        <template>
            <el-button>通过</el-button>
        </template>
    </SlTableInfo>
</SlListView>
</template>

<script>
export default {
  methods: {
    gotoPage(pageSize = 10, pageIndex = 1) {
      const params = {
          pageSize,
          pageIndex,
      }
      axios.get(params)
        .then(res => {
            if (res.success) {
                const { total, pageNum } = res.data
                Object.assign(this.page, { total, pageIndex: pageNum, pageSize })
            }
        }) 
    },
    rest() {
      this.listQuery = {}
    }
  }
}
</script>
