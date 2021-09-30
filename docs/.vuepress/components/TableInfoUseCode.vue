<template>
    <TableInfo
        :columns="columns"
        :tableData="tableData"
        multiple
    >
    </TableInfo>
</template>
<script> 
    export default {
    name:'TableInfoUseCode',
    data() {
        return {
                tableData: [
                
                    {
                        url:'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%A4%B4%E5%83%8F&hs=0&pn=3&spn=0&di=62040&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=1314911232%2C3565826320&os=4011589775%2C703028399&simid=4000508487%2C582619971&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=head&bdtype=0&oriquery=%E5%A4%B4%E5%83%8F&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fhbimg.b0.upaiyun.com%2F50a5e3fa7feb094a0f9cf644d9231e1b3fa2cfb3133bb-XF2bdj_fw658%26refer%3Dhttp%3A%2F%2Fhbimg.b0.upaiyun.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1635331449%26t%3D2235934db5330fd087c9fc92dab3a95f&fromurl=ippr_z2C%24qAzdH3FAzdH3Fi7wkwg_z%26e3Bv54AzdH3Fk5w61fAzdH3Fnb9b89d8&gsm=3&islist=&querylist=',
                        name:'lili',

                    }
                
                ],
                columns: [
                    {
                        name: 'url',
                        label: '产品图片',
                        isImage: true,
                        width: 150,
                        height: 130,
                        imagesParams: {
                            width: 128,
                            height: 128
                        }
                    },
                    {
                        name: 'name',
                        label: '产品名称'
                    },
                    {
                        name: 'operation',
                        label: '操作',
                        width: 110,
                        className: 'align-top vertical-operation'
                    }
                ]
        }
    }
}
</script>

<style scoped lang="scss">

</style>
