<template>
    <div>
        <el-button @click="openView">打开</el-button>
        <DialogTemplate ref="ref1" @click="closeDialog" />
    </div>
</template>

<script>
export default {
    name:'DialogUseCode',
    data() {
        return {
           dialog: false,
           formLabelAlign: {}
        };
    },
    methods: {
        openView() {
            this.openDialog('ref1',{
                dialog: true,
                title: '操作日志'
            })
        },
        openDialog(ref,data) {
            console.log(ref,data)
            let openRef = null
            openRef = this.$refs[`${ref}`]
            console.log('openRef',this.$refs)
            openRef.open(data)
            openRef = null
        },
        closeDialog() {

        }
    }
};
</script>

