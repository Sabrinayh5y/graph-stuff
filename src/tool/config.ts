
// 初始化配置文件

export let initConfig = function (init: {
    [key: string]: string | number | boolean | Array<number | string>
}, data: {
    [key: string]: string | number | boolean | Array<number | string>
}) {
    let key
    for (key in data)
        try {
            init[key] = data[key]
        } catch (e) {
            throw new Error("Illegal property value！")
        }
    return init
}