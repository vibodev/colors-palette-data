# colors-palette-data

精选色板数据

## 格式定义

```js
{
  name: 'material', // 色板名称
  desc:'', //色板简介
  groups:[
    {
      name: '', // 分组名称
      desc:'', // 分组简介
      colors:[ // 颜色数组
        {
          name:'',
          desc:'',
          type:'', // 填色类型,单色，线性渐变，角度渐变，径向渐变
          color: '#EEEEEE'
        }
      ]
    }
  ],
  // 无分组情况
  colors:[
    {
      name:'',
      desc:'',
      type:'', // 填色类型,单色，线性渐变，角度渐变，径向渐变
      color: '#EEEEEE'
    }
  ]
}
```

## 已支持色板数据
