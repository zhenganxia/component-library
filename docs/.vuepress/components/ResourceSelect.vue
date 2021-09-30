<template>
    <div class="resource">
        <el-select
            clearable
            ref="resourceSelect"
            style="width:100%"
            v-bind="$attrs"
            v-model="modelValue"
            v-on="$listeners"
        >
            <el-option
                :key="index"
                :label="item[name]"
                :value="item[id]"
                placeholder="请选择"
                v-for="(item,index) in options"
            />
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'ResourceSelect',
    model: {
        prop: 'selectValue',
        event: 'changSelect'
    },
    props: {
        selectValue: {
            type: [Number, String, Array],
            require: false,
            default: undefined
        },
        request: {
            // 需要调用的方法
            type: Promise,
            require: false
        },
        name: {
            type: String,
            require: false,
            default: 'name'
        },
        id: {
            type: [Number, String],
            require: false,
            default: 'id'
        },
        option: {
            type: Array,
            require: false,
            default: () => {
                return [
                    {
                        id: '选项1',
                        name: '黄金糕'
                    }, {
                        id: '选项2',
                        name: '双皮奶'
                    }
                ]
            }
        }
    },
    data() {
        return {
            optionData: []
        }
    },
    computed: {
        options() {
            return this.request ? this.optionData : this.option
        },
        modelValue: {
            set(values) {
                this.$emit('changSelect', values)
            },
            get() {
                return this.selectValue
            }
        }
    },
    watch: {
        request: {
            handler(request) {
                if (request) {
                    request.then(res => {
                        if (res.success) {
                            this.optionData = res.data
                        }
                    })
                }
            },
            immediate: true
        }
    }
}
</script>
<style lang="scss">
 .resource{
    margin: 10px 10px 10px 0;
 }
</style>
