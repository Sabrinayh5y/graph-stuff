import React from 'react'
import './index.scss'

import { Canvas, rotate, animation } from "vislite"
import drawPolarRuler from '../../tool/canvas/drawPolarRuler'

class GaugeBarometer extends React.Component {
    refContent: React.RefObject<any>

    constructor(props: any) {
        super(props)
        this.refContent = React.createRef()
    }
    render() {
        return (<div className='GaugeBarometer-view'>

            {/* 绘制图表 */}
            <div ref={this.refContent} className="content"></div>

        </div>)
    }
    componentDidMount() {
        let painter = new Canvas(this.refContent.current).config({
            shadowColor: "#555555"
        })

        let beginDeg = Math.PI * 3 / 4, deg = Math.PI * 1.5

        let currentValue = 58.06, value: number

        // 圆心和半径
        let cx = 250
        let cy = 250
        let radius = 200

        let updateView = function (value: number) {
            painter.clearRect(0, 0, 500, 500)

            let pDeg = beginDeg + Math.PI * 1.5 * value * 0.01

            // 外刻度尺
            drawPolarRuler(painter, {
                cx,
                cy,
                radius: radius + 10,
                value: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                begin: beginDeg,
                deg,
                "font-size": 20,
                color: "#e93f33",
                "font-rotate": false,
                "font-weight": 800,
                "small-mark": true
            });

            // 内刻度尺
            drawPolarRuler(painter, {
                cx: cx,
                cy: cy,
                radius: radius - 10,
                value: [0, 10, 20, 30, 40, 50, 60],
                begin: beginDeg,
                deg: deg,
                color: "#000000",
                "font-size": 20,
                "mark-direction": "inner",
                "font-rotate": false,
                "font-weight": 800,
                "small-mark": true
            })

            let p0 = rotate(cx, cy, pDeg, cx + radius + 20, cy - 1)
            let p1 = rotate(cx, cy, pDeg, cx + radius + 20, cy + 1)
            let p2 = rotate(cx, cy, pDeg, cx - 20, cy + 4)
            let p3 = rotate(cx, cy, pDeg, cx - 30, cy)
            let p4 = rotate(cx, cy, pDeg, cx - 20, cy - 4)

            // 表盘文字
            painter.config({
                "fontSize": 14,
                "fontWeight": 200,
                "fillStyle": "black",
                "textAlign": "center",
                "textBaseline": "middle"
            }).fillText("PLP", cx, cy - radius * 0.6)

                // 指针
                .fillCircle(cx, cy, 7).config({
                    "lineWidth": 2
                }).strokeCircle(cx, cy, 11)
                .beginPath()
                .moveTo(p0[0], p0[1])
                .lineTo(p1[0], p1[1])
                .lineTo(p2[0], p2[1])
                .lineTo(p3[0], p3[1])
                .lineTo(p4[0], p4[1])
                .fill()

                // 值文字
                .config({
                    "fontSize": 34,
                    "fontWeight": 800,
                    "fillStyle": "#555555"
                })
                .fillText(value, cx, cy + radius * 0.4)

        }

        updateView(currentValue)

        // 定时模拟修改
        setInterval(function () {

            value = Math.random() * 100
            animation(function (deep) {

                if (updateView)
                    updateView(+((currentValue + (value - currentValue) * deep).toFixed(2)))

            }, 300, function () {
                currentValue = value
            })

        }, 1000)
    }
}
export default GaugeBarometer