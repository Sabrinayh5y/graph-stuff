import React from 'react'
import './index.scss'

import { Canvas, animation, rotate, getLoopColors, resizeObserver, throttle } from "vislite"
import type CanvasType from 'vislite/types/Canvas'

let data = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
]

let colors = getLoopColors(data.length)

// 求解值总数
let allValue = 0
for (let i = 0; i < data.length; i++) {
    allValue += data[i].value
}

// 当前被悬浮的区域
let currentRegion: number | string

// 注册鼠标悬浮事件
let stop: Function = function () { }

let cx: number, cy: number

let updateView: Function
class PieSimple extends React.Component {
    
    refContent: React.RefObject<any>
    refTooltip: React.RefObject<any>
    painter: CanvasType | undefined

    constructor(props: any) {
        super(props)
        this.refContent = React.createRef()
        this.refTooltip = React.createRef()
    }
    render() {
        return (<div className='PieSimple-view' onMouseMove={event => this.doHover.call(this, event)}>

            {/* 绘制图表 */}
            <div ref={this.refContent} className="content"></div>

            {/* 悬浮提示 */}
            <div ref={this.refTooltip} className="tooltip"></div>

        </div>)
    }
    componentDidMount() {
        resizeObserver(this.refContent.current, throttle(() => {
            this.doResize()
        }, {
            keep: true
        }))
    }
    doResize() {
        let mycontent = this.refContent.current as HTMLElement

        // 圆心和半径
        cx = mycontent.clientWidth * 0.5
        cy = mycontent.clientHeight * 0.5 + 20
        let radius = Math.max(Math.min(cx, cy) - 100, 0)

        if (radius <= 0) return

        this.painter = new Canvas(mycontent).config({
            shadowColor: "#555555"
        })

        updateView = (deep: number, up = undefined, down = undefined) => {
            if (!this.painter) return

            this.painter.setRegion("").clearRect(0, 0, mycontent.clientWidth, mycontent.clientHeight)

            // 绘制标题
            this.painter.config({
                "textAlign": "center",
                "fontSize": 20,
                "fontWeight": 600

            }).fillText("Referer of a Website", cx, 30)
                .config({
                    "fontWeight": 200,
                    "fontSize": 12
                }).fillText("Fake Data", cx, 60)

            // legend提示
            this.painter.config({
                "textAlign": "left"
            })
            for (let i = 0; i < data.length; i++) {
                this.painter.config({
                    "fillStyle": "black"
                }).fillText(data[i].name, 50, i * 24 + 50)
                    .config({
                        "fillStyle": colors[i]
                    }).fillRect(20, i * 24 + 40, 25, 16)

            }

            let beginDeg = Math.PI * -0.5

            let drawSelectPie
            for (let i = 0; i < data.length; i++) {

                let deg = data[i].value / allValue * Math.PI * 2
                let drawPie = (i: number, beginDeg: number, deg: number) => {
                    if (!this.painter) return

                    this.painter.setRegion("index" + i)

                    // 根据动画修改半径
                    let radiusMore = 0
                    if (up == "index" + i) {
                        radiusMore = deep
                    } else if (down == "index" + i) {
                        radiusMore = 1 - deep
                    }

                    this.painter.config({
                        fillStyle: colors[i],
                        strokeStyle: colors[i],
                        shadowBlur: up == "index" + i ? 10 : 0
                    });

                    let p1 = rotate(cx, cy, beginDeg + deg * 0.5, cx + radius, cy)
                    let p2 = rotate(cx, cy, beginDeg + deg * 0.5, cx + radius + 20, cy)
                    let p3 = [p2[0] + 15 * (p1[0] > cx ? 1 : -1), p2[1]]
                    let p4 = [p2[0] + 20 * (p1[0] > cx ? 1 : -1), p2[1]]

                    // 连线
                    this.painter.beginPath().moveTo(p1[0], p1[1]).lineTo(p2[0], p2[1]).lineTo(p3[0], p3[1]).stroke()

                    // 饼
                    this.painter.fillArc(cx, cy, 0, radius + radiusMore * radius * 0.05, beginDeg, deg)

                    // 文字
                    this.painter.config({
                        textAlign: p1[0] > cx ? "left" : "right",
                        fillStyle: "black",
                        shadowBlur: 0
                    }).fillText(data[i].name, p4[0], p4[1])

                }

                if (up != "index" + i) {
                    drawPie(i, beginDeg, deg)
                } else {
                    drawSelectPie = (function (i, beginDeg, deg) {
                        return function () {
                            drawPie(i, beginDeg, deg)
                        }
                    })(i, beginDeg, deg)
                }

                beginDeg += deg
            }

            if (drawSelectPie) drawSelectPie()

        }

        updateView(1)
    }
    doHover(event: any) {
        if (this.painter) {
            let mytooltip = this.refTooltip.current as HTMLElement

            this.painter.getRegion(event.pageX, event.pageY).then(function (regionName) {
                if (regionName) {

                    if (!currentRegion) {

                        // 显示悬浮框
                        mytooltip.style.display = ""

                    }

                    // 如果悬浮区域改变了
                    if (regionName != currentRegion) {
                        stop();

                        let _currentRegion = currentRegion;
                        currentRegion = regionName;

                        stop = animation(function (deep) {
                            updateView(deep, regionName, _currentRegion)
                        }, 200)

                        let index = +regionName.replace('index', '')

                        // 修改悬浮框内容
                        mytooltip.innerHTML = "<div style='border-color:" + colors[index] + "'><label>Access From</label>" +
                            "<i style='background-color:" + colors[index] + "'></i>" +
                            "<span>" + data[index].name + "</span>" +
                            "<span>" + data[index].value + "</span></div>"

                    }

                    // 修改悬浮框位置
                    if (event.pageX > cx) {
                        mytooltip.style.left = (event.pageX - 20 - mytooltip.clientWidth) + "px"
                    } else {
                        mytooltip.style.left = (event.pageX + 20) + "px"
                    }
                    mytooltip.style.top = (event.pageY + 20) + "px"

                } else {

                    // 如果当前存在悬浮区域
                    if (currentRegion) {
                        stop()

                        let _currentRegion = currentRegion
                        currentRegion = ""

                        // 隐藏悬浮框
                        mytooltip.style.display = "none"

                        stop = animation(function (deep) {
                            updateView(deep, undefined, _currentRegion)
                        }, 200)
                    }

                }

            })
        }
    }
}

export default PieSimple