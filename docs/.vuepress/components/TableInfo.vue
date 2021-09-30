<template>
    <el-table :border="border" :data="tableData" ref="tableInfo" v-bind="$attrs" v-on="$listeners" class="table">
        <el-table-column align="center" type="index" v-if="showIndex" width="50"></el-table-column>
        <el-table-column :selectable="selectable" align="center" type="selection" v-if="multiple" width="55"></el-table-column>
        <!-- <el-table-column type="expand" v-if="expand">
            <template v-slot="{row}">
                <slot :row="row" name="expand"></slot>
            </template>
        </el-table-column> -->
        <template v-for="col in columns">
            <el-table-column
                :align="col.align || align"
                :class-name="col.className"
                :header-align="headerAlign"
                :key="col.name"
                :label="col.label"
                :width="col.width"
                v-bind="col.props"
            >
                <!-- eslint-disable-next-line -->
                <!-- <template slot="header" slot-scope="scope">
                    <slot :name="col.name + `-header`">
                        {{col.label}}
                        <span class="required-star" v-if="col.required">*</span>
                    </slot>
                </template> -->
                <template slot-scope="scope">
                    <slot :$index="scope.$index" :custom-column="col" :name="col.name" :row="scope.row">
                        <ShowImage :params="col.imagesParams" :src="scope.row[col.name]" v-if="col.isImage" />
                        <a
                            :href="scope.row[col.linkUrl]"
                            class="link"
                            target="_blank"
                            v-else-if="col.isLink"
                        >{{scope.row[col.name]}}</a>
                        <span v-else>{{ showNormalInfo(scope.row[col.name], col) }}</span>
                    </slot>
                </template>
            </el-table-column>
        </template>
        <template slot="empty">
            <slot name="empty"></slot>
        </template>
    </el-table>
</template>

<script>
// import Sortable from 'sortablejs'
// import { isEmpty } from '@/shared/utils/index'
export default {
    name: 'TableInfo',
    // components: { ShowImage },
    props: {
        columns: {
            type: Array,
            required: false,
            default: () => {
                return []
            }
        },
        tableData: {
            type: Array,
            required: false,
            default: () => {
                return []
            }
        },
        showIndex: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        expand: {
            type: Boolean,
            default: false
        },
        align: {
            type: String,
            default: 'left'
        },
        headerAlign: {
            type: String,
            default: 'center'
        },
        params: {
            type: Object,
            required: false,
            default: () => {
                return {}
            }
        },
        border: {
            type: Boolean,
            default: true
        },
        checkAllPage: {
            // 所有页全选
            type: Boolean,
            default: false,
            required: false
        },
        // selectable: {
        //     // 批量选择
        //     type: Function,
        //     default: function () {
        //         return _ => {
        //             true
        //         }
        //     }
        // },
        // 设置sortable  el-table的row-key属性必须有，保证每一行独立
        sortable: {
            type: Boolean,
            default: false
        },
        sortableOptions: {
            type: Object,
            default: () => {
                return {}
            }
        },
        selectable: {
            type: Function,
            default: () => {
                return true
            }
        }
    },
    watch: {
        checkAllPage: {
            handler: function (newVal) {
                this.toggleSelection()
            }
        },
        tableData: {
            handler: function () {
                if (this.checkAllPage) {
                    this.$nextTick(() => {
                        this.toggleSelection()
                    })
                }
            },
            deep: true
        }
    },
    data() {
        return {}
    },
    created() {},
    mounted() {
        if (this.sortable) {
            this.setSort()
        }
    },
    beforeDestroy() {
        if (this._sortable) {
            this._sortable.destroy()
            this._sortable = null
        }
    },
    methods: {
        clearSelection() {
            this.$refs.tableInfo.clearSelection()
        },
        checkAll() {
            this.tableData.forEach(row => {
                this.$refs.tableInfo.toggleRowSelection(row, true)
            })
        },
        toggleSelection() {
            if (this.checkAllPage) {
                this.checkAll()
            } else {
                this.clearSelection()
            }
        },
        showNormalInfo(data, col) {
            const defaultData = col.default === undefined ? '' : col.default
            // return isEmpty(data) ? defaultData : data
        },
        setSort() {
            const defaultOption = {
                onEnd: ({ newIndex, oldIndex }) => {
                    const currRow = this.tableData.splice(oldIndex, 1)[0]
                    this.tableData.splice(newIndex, 0, currRow)
                    this.$emit('dragEnd')
                }
            }
            const el = this.$refs.tableInfo.$el.querySelector('.el-table__body-wrapper > .el-table__body > tbody')
            this._sortable = Sortable.create(el, Object.assign(defaultOption, this.sortableOptions))
        }
    }
}
</script>
<style lang="scss">
.table{
    width: 100%
    // /deep/.align-top {
    //     vertical-align: top;
    // }
    // /deep/.vertical-operation {
    //     .cell {
    //         display: flex;
    //         flex-flow: column;
    //         button {
    //             margin-left: 0;
    //             margin-bottom: 10px;
    //         }
    //     }
    // }
    // .link {
    //     text-decoration: underline;
    //     text-decoration-color: grey;
    //     display: inline-block;
    //     max-width: 200px;
    //     &:hover {
    //         color: red;
    //     }
    // }
    // .required-star {
    //     display: inline-block;
    //     margin-left: 5px;
    //     vertical-align: middle;
    //     color: red;
    // }
}
</style>