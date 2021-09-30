<template>
    <Pagination 
        :pageInfo="pageInfo"
        @pageChange="pageChange"
    />
</template>
<script>
  export default {
    data() {
      return {
        pageInfo:{
          total: 20,
          pageIndex: 1,
          pageSize: 10
        }
      }
    },
    methods: {
        pageChange(val) {
          console.log('当前分页情况',val)
        }
    }
  }
</script>