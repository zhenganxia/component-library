<template>
  <ShowImage 
    :params="params"
    :src="src"
  >
    <SimilarTag :similarity="similarity"/>
  </ShowImage>
</template>
<script>
  export default {
    data() {
      return {
        params:{
          width: 300,
          height: 300,
          boderWidth: 218,
          boderHeight: 218
        },
       similarity:'S',
       src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F50a5e3fa7feb094a0f9cf644d9231e1b3fa2cfb3133bb-XF2bdj_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635331449&t=2235934db5330fd087c9fc92dab3a95f"
      }
    }
  }
</script>