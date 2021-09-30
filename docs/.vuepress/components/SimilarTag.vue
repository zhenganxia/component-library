<template>
    <el-tooltip
        :content="similarDes[similarity]"
        placement="right"
        effect="dark"
        v-if="similarity"
    >
        <span class="tooltip-similar-tag"  :class="similarTagClass[similarity]" >{{'S' || '?'}}</span>
    </el-tooltip>
</template>

<script>
export default {
    data() {
        return {
            similarDes: {
                'S':'相似度:重复款',
                'A':'相似度:高',
                'B':'相似度:中',
                'C':'相似度:低',
                'D':'相似度:低',
            },
            similarTagClass:{
                'S':'similar-tag--red',
                'A':'similar-tag--orange',
                'B':'similar-tag--green',
                '?':'similar-tag--unknow',
                'C':'similar-tag--gray',
                'D':'similar-tag--gray',
            }
        }
    },
    props: {
        // 相似标记，没有则不展示
        similarity: {
            type: String,
            default: null
        },
        // 强制展示相似标记，没有数据展示为？
        forceShowTag: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="scss" scoped>
.tooltip-similar-tag {
    position: absolute;
    // demo模拟注释
    // top: -10px;
    // right: -10px;
    top: -2%;
    left: 93%;
    z-index: 2;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    color: white;
    font-size: 12px;
}
.similar-tag--red {
    background: #f56c6c;
}
.similar-tag--orange {
    background: #e6a23c;
}
.similar-tag--green {
    background: #67c23a;
}
.similar-tag--gray {
    background: #909399;
}

.similar-tag--unknow,
.similar-tag--question {
    background: #faecd8;
    color: #e6a23c;
}
</style>