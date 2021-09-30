# Select 选择器

::: tip
#### 直接传option下拉数据，或者传接口地址组件内部获取组件
#### 组件使用时可正常使用element属性和方法
:::

### 基本用法
<br/>

<demo-block>
::: slot source
<ResourceSelectUseCode />
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/ResourceSelectUseCode.vue
:::

</demo-block>


#### Attributes

| 参数        | 说明                                            | 类型          | 可选值 | 默认值 |
| ----------- | ----------------------------------------------- | ------------- | ------ | ------ |
| selectValue | 父组件v-model绑定值                             | number/array  | -      | -      |
| request     | 传入下拉数据接口方法,需要直接接口获取数据时使用 | promise       | -      | -      |
| name        | 下拉绑定label默认值                             | string        | -      | name   |
| id          | 下拉绑定默认value                               | string/number | -      | id     |
| options     | 直接传入数组，下拉框数据                        | array        | -      | -      |
