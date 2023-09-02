import React from 'react'
import './index.scss'

import { SVG, animation, rotate } from "vislite"
import type SVGType from 'vislite/types/SVG'

class MoneySchedule extends React.Component {
    refContent: React.RefObject<any>
    constructor(props: any) {
        super(props)
        this.refContent = React.createRef()
    }
    render() {
        return (<div className='MoneySchedule-view'>

            {/* 绘制图表 */}
            <div ref={this.refContent} className="content"></div>

        </div>)
    }

    componentDidMount() {
        let painter = new SVG(this.refContent.current)

        // 进度条
        let rate = 0.73

        painter

            // 绘制三个背景圆
            .config({
                'fillStyle': '#fff7e9'
            }).appendEl("circle").fillCircle(250, 250, 250)
            .config({
                'fillStyle': '#ffe1b1'
            }).appendEl("circle").fillCircle(250, 250, 220)
            .config({
                'fillStyle': '#ffffff'
            }).appendEl("circle").fillCircle(250, 250, 180)

        // 准备好用来绘制动画wave的两个标签和进度弧
        let innerWaveEl = painter.appendEl("path").getEl()
        let outerWaveEl = painter.appendEl("path").getEl()
        let arcNodeEl = painter.appendEl("path").getEl()

        // 绘制三行文字
        painter.config({
            'fontSize': 40,
            'fillStyle': '#272727',
            'textAlign': 'center'
        })
            .appendEl("text").fillText('￥100,000', 250, 210)
            .config({
                'fontSize': 30,
                'fillStyle': '#595757'
            })
            .appendEl("text").fillText('可借', 250, 160)
            .config({
                'fontSize': 24,
                'fillStyle': '#a4a1a1'
            })
            .appendEl("text").fillText('总额度150,000', 250, 260)

        // 绘制具体的一条wave
        let drawerWave = function (painter: SVGType, rate: number, deep: number, help: number) {

            // wave的起点和终点
            let beginPoint = rotate(250, 250, (0.5 - rate) * Math.PI, 410, 250)
            let endPoint = rotate(250, 250, (1.5 - rate) * Math.PI, 410, 250)

            // wave由下半圆和波浪组成
            painter
                .beginPath()
                .moveTo(beginPoint[0], beginPoint[1])

                // 绘制半圆部分
                .arc(250, 250, 160, (0.5 - rate) * 180, 2 * rate * 180)

                // 绘制波浪部分
                .bezierCurveTo(

                    // rate > 0.5 ? 1 - rate : rate是用来控制波动大小的，为了好看，0-0.5和0.5-1取对称
                    endPoint[0] + (beginPoint[0] - endPoint[0]) * 0.5 * deep, beginPoint[1] + 200 * deep * help * (rate > 0.5 ? 1 - rate : rate),
                    endPoint[0] + (beginPoint[0] - endPoint[0]) * 0.5 * (1 + deep), beginPoint[1] - 200 * (1 - deep) * help * (rate > 0.5 ? 1 - rate : rate),

                    // 上面是第一和第二个看着点，最后这个是终点，加上画笔开始位置作为起点
                    beginPoint[0], beginPoint[1]
                )

                // 填充
                .fill()

        }

        // 绘制波浪（完整的两条）
        let fullWave = function (rate: number, deep: number) {
            let help = 1

            if (deep > 0.5) {
                deep = deep - 0.5
                help = -1
            }
            deep *= 2

            // 绘制内弧
            drawerWave(painter.useEl(innerWaveEl).config({
                'fillStyle': '#ff7f08'
            }), rate, deep, help)

            // 绘制外弧
            drawerWave(painter.useEl(outerWaveEl).config({
                'fillStyle': '#fead2e'
            }), rate, deep, -help)
        }

        // 启动wave动画
        let renderWave = function (rate: number) {

            animation(function (deep) {
                fullWave(rate, deep);
            }, 2000, function () {
                renderWave(rate)
            })
        }

        // 启动动画并绘制进度条
        animation(function (deep) {

            // 根据当前进度deep更新弧形进度
            painter.config({
                'arcStartCap': 'round',
                'arcEndCap': 'round',
                'fillStyle': '#ff7f08'
            }).useEl(arcNodeEl).fillArc(250, 250, 180, 200, -90, -360 * rate * deep)

            // 初始化wave
            fullWave(rate * deep, deep)

        }, 2000, function () {

            // 初始化显示完毕以后，启动wave动画
            renderWave(rate)
        })

    }
}
export default MoneySchedule