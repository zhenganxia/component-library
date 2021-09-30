# 列表
:::tip
#### 可支持多选和拖拽功能\
#### 组件使用时可正常使用element属性和方法
:::

### 基本用法
<br/>

<demo-block>
::: slot source
<TableInfoUseCode /> 
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/TableInfoUseCode.vue
:::
</demo-block>




#### Attributes

| 参数            | 说明               | 类型    | 可选值            | 默认值 |
| :-------------- | :----------------- | :------ | :---------------- | :----- |
| tableData       | 表格数据           | array   | -                 | -      |
| columns         | 表头数据           | array   | -                 | -      |
| multiple        | 是否显示复选框     | boolean | false/true        | false  |
| showIndex       | 是否显示索引       | boolean | false/true        | false  |
| expand          | 是否下拉展示       | boolean | false/true        | false  |
| sortable        | 是否可拖拽         | boolean | false/true        | false  |
| border          | 是否显示边框       | boolean | false/true        | true   |
| sortableOptions | 需要拖拽的数据     | object  | -                 | -      |
| align           | 表格所有列对齐方式 | string  | center/left/right | left   |
| checkAllPages   | 所有页全选         | boolean | false/true        | false  |

#### Columns Attributes

| 参数         | 说明               | 类型    | 可选值                   | 默认值 |
| ------------ | ------------------ | ------- | ------------------------ | ------ |
| align        | 每列对齐方式       | string  | -                        | -      |
| width        | 每列宽度           | number  | -                        | -      |
| class-name   | 每列样式           | string  | -                        | -      |
| isImage      | 当前列是否展示图片 | boolean | false/true               | false  |
| imagesParams | 当前列图片参数     | object  | {width: 128,height: 128} | -      |
| headerAlign  | 表头对齐方式       | string  | center/left/right        | center |



#### Methods

| 方法名          | 说明               |
| :-------------- | :----------------- |
| clearSelection  | 清除复选框全选清除 |
| checkAll        | 复选框全选         |
| toggleSelection | 复选框是否全选切换 |
| showNormalInfo  |                    |
| setSort         | 表格拖拽           |

#### Slot

| name   | 说明                 |
| :----- | :------------------- |
| header | 自定义表头数据       |
| empty  | 自定义表格无数据内容 |




