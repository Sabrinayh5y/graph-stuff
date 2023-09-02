import React from 'react'
import "./index.scss"

import store from '../../stores/index'

class confirm extends React.Component {

    closeDialog() {
        store.dispatch({
            type: "closeDialog"
        })
    }

    render() {
        return (<div className='info-view'>
            <div className="logo"></div>
            <header>
                <span>Graph Stuff</span>
                <div>(作者 <span>Sabrinayh5y</span>)</div>
            </header>
            <div className="content">
                <div>
                    <h2>介绍</h2>
                    ：本项目是一些用例，汇集一些常用图表，主要基于
                    <a href="https://oi-contrib.github.io/VISLite/" target="_blank">
                        VISLite
                    </a>
                    开发，我们会逐步丰富。
                </div>
                <div>
                    <h2>初衷</h2>
                    ：一个开源的可视化相关内容探索基地。
                </div>
                <div>
                    欢迎任何人贡献代码！
                </div>
            </div>
            <div className="btn-list">
                <span className='btn' onClick={() => this.closeDialog.call(this)}>关闭</span>
                <a className='btn' href="https://github.com/Sabrinayh5y/graph-stuff" target="_blank">访问源码</a>
            </div>
        </div >)
    }
}

export default confirm