<template>
    <div>
        <el-dialog
            :title="params.title"
            :visible.sync="params.dialog"
            :close-on-click-modal="false"
            width="900px"
            :lock-scroll="false"
            :before-close="handleClose"
            center
        >
            <!-- <slot name="content" v-loading="loading"></slot> -->
             <el-form label-position="right" label-width="80px" :model="formLabelAlign">
                <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button @click="handleClose">确认</el-button>
                <el-button @click="cancel" v-if="isCancel">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name:'DialogTemplate',
    props:{
        isCancel:{ type:Boolean,required:false, default:true }
    },
    data() {
        return {
            params: {},
            fetchData:[],
            loading: false,
            formLabelAlign:{}
        }
    },
    methods: {
        open(data) {
            if (data) {
                this['params'] = data
                this.loadData()
            }
        },
        loadData() {
            this.loading = true
            // axios.get(this.params.fetchUrl)
            // .then(res =>{
            //     this.fetchData = res.data
            // })
            // .finally(()=>{
            //    this.loading = false
            // })
        },
        handleClose() {
            this.$emit('closeDialog')
            this.cancel()
        },
        cancel() {
            Object.assign(this.$data, this.$options.data.call(this))
        }
    }
}
</script>

<style scoped lang="scss">
</style>
