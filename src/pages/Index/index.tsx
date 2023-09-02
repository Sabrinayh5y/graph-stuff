import React from 'react'
import './index.scss'
import menuData from './menu.json'
import { animation } from 'vislite'

class Index extends React.Component {
    refMenu: React.RefObject<any>
    constructor(props: any) {
        super(props)
        this.refMenu = React.createRef()
    }
    openPage(name: string) {
        let targetEl = document.createElement('a')
        targetEl.setAttribute('target', '_blank')
        targetEl.setAttribute('href', "#/" + name)
        targetEl.click()
    }
    scrollFixex(name: string) {
        let offsetTop = (document.getElementById(name) as HTMLElement).offsetTop - 70
        let currentScrollTop = this.refMenu.current.scrollTop || 0

        animation(
            deep => {
                this.refMenu.current.scrollTop =
                    (offsetTop - currentScrollTop) * deep + currentScrollTop
            },
            500,
            () => {
                this.refMenu.current.scrollTop = offsetTop
            }
        )
    }
    render() {
        return (<div className='index-view'>
            <header>
                <h2>
                    Graph Stuff
                </h2>
                <nav>
                    <a href="https://oi-contrib.github.io/VISLite/" target="_blank">powered by VISLite</a>
                    <a href="https://github.com/Sabrinayh5y/graph-stuff" target="_blank">查看源码</a>
                </nav>
            </header>
            <div className="content">
                <div className="nav">
                    {
                        menuData.map((menu, index) => (menu.children.length > 0 ? <h4 style={{
                            backgroundImage: "url(./icon/" + menu.en + ".svg)"
                        }} key={"nav-" + index} onClick={() => this.scrollFixex.call(this, menu.en)}>{menu.title}</h4> : null))
                    }
                </div>
                <div className="menu" ref={this.refMenu}>
                    {
                        menuData.map((menu, i) => (menu.children.length > 0 ? <div key={"menu-" + i} >
                            <h4 id={menu.en}>
                                {menu.title}
                                <span>{menu.en}</span>
                            </h4>
                            <ul>
                                {
                                    menu.children.map((demo, j) => (<li key={"menu-" + i + "-" + j} onClick={() => this.openPage.call(this, demo.en)}>
                                        <div style={{
                                            backgroundImage: "url(./examples/" + demo.icon + ")"
                                        }}></div>
                                        <h6>{demo.title}</h6>
                                    </li>))
                                }
                            </ul>
                        </div> : null))
                    }
                </div>
            </div>
        </div>)
    }
}

export default Index
