# 图片
::: tip
#### 图片展示+图片放大功能
:::
### 基本用法
<br/>

<demo-block>
::: slot source
<ShowImageUseCode />
:::

::: slot sourceCode
<<< @/docs/.vuepress/components/ShowImageUseCode.vue
:::

</demo-block>

#### Attributes

| 参数      | 说明 | 类型   | 可选值 | 默认值 |
| --------- | ---- | ------ | ------ | ------ |
| direction     | 图片展示位置 | string | right/left/top/bottom      | right     |
| imageZoomSize | 放大图片尺寸 | object |    |  { width: 320, height: 320 }     |
| params | 图片和边框尺寸 | object |    |  { width: 48, height: 48 }     |