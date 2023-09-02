import React from 'react'
import './index.scss'

import { Canvas, TreeLayout, resizeObserver, throttle } from "vislite"
import type CanvasType from 'vislite/types/Canvas'
import type TreeLayoutType from 'vislite/types/TreeLayout'

let uniqueId: number
class TreeLR extends React.Component {
    
    refContent: React.RefObject<any>
    painter: CanvasType | undefined
    treeLayout: TreeLayoutType | undefined
    data: any

    constructor(props: any) {
        super(props)
        this.refContent = React.createRef()
    }
    render() {
        return (<div className='TreeLR-view'>

            {/* 绘制图表 */}
            <div ref={this.refContent} className="content" onClick={event => this.doClick.call(this, event)}></div>

        </div>)
    }
    componentDidMount() {
        fetch('./data/flare.json').then(res => {
            if (res.status === 200) {
                return res.json()
            }
        }).then(data => {
            this.data = data
            resizeObserver(this.refContent.current, throttle(() => {
                this.doResize()
            }, {
                keep: true
            }))
        })
    }
    doResize() {
        uniqueId = 0
        let mycontent = this.refContent.current as HTMLElement

        let width = mycontent.clientWidth
        let height = mycontent.clientHeight

        this.painter = new Canvas(mycontent).config({
            fontSize: 9
        })

        let pid

        this.treeLayout = new TreeLayout({
            "id": function (treedata) {

                // 由于原始数据的name有相同的，加个唯一后缀
                return treedata.name + "-" + uniqueId++
            }
        }).setOption({
            type: "rect",
            direction: "LR",
            x: 10,
            y: height * 0.5,
            width: width - 140,
            height: height - 20
        }).bind(this.data, tree => {
            if (!this.painter) return

            this.painter.clearRect(0, 0, width, height)

            // 绘制连线
            this.painter.setRegion("").config({
                strokeStyle: '#cccccc'
            });
            for (let key in tree.node) {
                if (tree.node[key].show && key != tree.root) {
                    pid = tree.node[key].pid

                    let dist = (tree.node[key].left - tree.node[pid].left) * 0.5

                    this.painter
                        .beginPath()
                        .moveTo(tree.node[key].left, tree.node[key].top)
                        .bezierCurveTo(
                            tree.node[key].left - dist, tree.node[key].top,
                            tree.node[pid].left + dist, tree.node[pid].top,
                            tree.node[pid].left, tree.node[pid].top
                        ).stroke()
                }
            }

            // 绘制节点和文字
            this.painter.config({
                strokeStyle: '#b0c4de'
            });
            for (let key in tree.node) {
                if (tree.node[key].show) {
                    if (!tree.node[key].isOpen && tree.node[key].children.length > 0) {
                        this.painter.config({
                            fillStyle: "#b0c4de"
                        });
                    } else {
                        this.painter.config({
                            fillStyle: "#ffffff"
                        });
                    }
                    this.painter.setRegion(key).fullCircle(tree.node[key].left, tree.node[key].top, 4)

                    this.painter.setRegion("").config({
                        fillStyle: "black"
                    }).fillText(key.replace(/\-\d+$/, ''), tree.node[key].left + 10, tree.node[key].top)
                }
            }

        })
    }
    doClick(event: any) {
        if (this.painter) {
            this.painter.getRegion(event.pageX, event.pageY).then(regionName => {
                if (regionName) {

                    // 复位，保证id每次一致
                    uniqueId = 0

                    if (this.treeLayout)
                        this.treeLayout.toggleNode(regionName)
                }
            })
        }
    }
}

export default TreeLR