# [Graph Stuff](https://github.com/Sabrinayh5y/graph-stuff)

> 欢迎任何人贡献代码！

## 开发指南

本项目用例主要基于[VISLite](https://oi-contrib.github.io/VISLite/)开发，下面来说明如何添加一个新的用例。

比如我们新的例子名称为：NewExample

### 新建页面

在 ```src/pages/```中添加文件夹：NewExample，里面至少包含一个文件 index.tsx ，里面的大体内容如下：

```tsx
class NewExample extends React.Component {
    render() {
         return (<div className='NewExample-view'></div>)
    }
}
export default NewExample
```

然后在 ```src/App.tsx``` 中配置路由：

```tsx
let NewExample = LazyComponent(() => import('./pages/NewExample/index'))

const App: React.FC = (): JSX.Element => {
  const routing = useRoutes([
    {
      path: "/NewExample",
      element: <NewExample />
    },
    ......
```

### 配置到入口

在 ```src/pages/Index/menu.json``` 文件中，比如例子属于 ```折线图``` ，那么新增配置大体如下：

```json
[
    {
        "title": "折线图",
        "en": "line",
        "children": [ {
                "title": "一个新的例子",
                "en": "NewExample",
                "icon": "NewExample.png"
            }
            ......]
    }
    ......
]
```

其中 ```NewExample.png``` 表示例子截图，对于此次，就需要在 ```public/examples/``` 中添加这个图片即可。

### 数据

如果用例中的数据较多，可以统一存放到 ```public/data/``` 下，已经存在的数据，除非特别清楚，否则不要轻易修改，当然，你可以随便使用，使用的话，建议直接请求，比如希望使用其中的 flare.json 的话：

```js
fetch('./data/flare.json').then(res => {
    if (res.status === 200) {
        return res.json()
    }
}).then(data => {
    // data 就是你要的数据
})
```