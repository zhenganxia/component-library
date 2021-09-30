# 分页
::: tip
#### 内置分页业务操作方法
:::

### 基本用法
<br/>

<demo-block>
::: slot source
<PaginationUseCode />
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/PaginationUseCode.vue
:::

</demo-block>


#### Attributes

| 参数      | 说明 | 类型   | 可选值 | 默认值 |
| --------- | ---- | ------ | ------ | ------ |
| total     | 总数 | number | —      | —      |
| pageIndex | 页码 | number | —      | 1      |



#### Events

| 事件名     | 说明             |
| ---------- | ---------------- |
| pageChange | 更新页码重新赋值 |
