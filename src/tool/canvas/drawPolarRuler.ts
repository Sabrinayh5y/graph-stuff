import type CanvasType from "vislite/types/Canvas";

import { rotate } from 'vislite'
import { initConfig } from '../config'

export default function (painter: CanvasType, config: any) {

    let i, j, curDeg, textHelpDeg, p1, p2

    let attr = initConfig({
        "mark-direction": "outer",
        "value-position": "mark",
        "color": 'black',
        "begin": 0,
        "deg": Math.PI * 2,
        "font-size": 12,
        "font-weight": 400,
        "font-rotate": true,
        "small-mark": false
    }, config)


    let value = attr.value

    painter.config({
        'lineWidth': 1,
        'fillStyle': attr.color as string,
        'strokeStyle': attr.color as string,
        'fontSize': attr["font-size"] as number,
        "fontWeight": attr["font-weight"] as number,
        'textAlign': 'center',
        'textBaseline': 'middle',
        "lineDash": []
    })

    // 先绘制弧度
    painter.beginPath().arc(attr.cx as number, attr.cy as number, attr.radius as number, attr.begin as number, attr.deg as number).stroke()

    let markNumber = attr["value-position"] == "mark" ? (value as Array<number>).length : (value as Array<number>).length + 1

    // 绘制刻度
    let distanceDeg = attr.deg as number / (markNumber - 1)

    // 绘制刻度
    for (i = 0; i < markNumber; i++) {

        p1 = rotate(
            attr.cx as number, attr.cy as number,
            attr.begin as number + i * distanceDeg,
            (attr.cx as number) + (attr.radius as number), attr.cy as number
        )

        p2 = rotate(
            attr.cx as number, attr.cy as number,
            attr.begin as number + i * distanceDeg,
            (attr.cx as number) + (attr.radius as number) + (attr['small-mark'] ? 10 : 4) * (attr["mark-direction"] == 'inner' ? -1 : 1), attr.cy as number
        )

        painter.config({
            "lineWidth": attr['small-mark'] ? 2 : 1
        }).beginPath().moveTo(p1[0], p1[1]).lineTo(p2[0], p2[1]).stroke()

        // 绘制小刻度
        painter.config({
            "lineWidth": 1
        });
        if (attr['small-mark'] && i < markNumber - 1) {

            for (j = 1; j <= 4; j++) {
                p1 = rotate(
                    attr.cx as number, attr.cy as number,
                    attr.begin as number + (i + j * 0.2) * distanceDeg,
                    (attr.cx as number) + (attr.radius as number), attr.cy as number
                );

                p2 = rotate(
                    attr.cx as number, attr.cy as number,
                    attr.begin as number + (i + j * 0.2) * distanceDeg,
                    (attr.cx as number) + (attr.radius as number) + 4 * (attr["mark-direction"] == 'inner' ? -1 : 1), attr.cy as number
                );

                painter.beginPath().moveTo(p1[0], p1[1]).lineTo(p2[0], p2[1]).stroke();
            }

        }
    }

    // 绘制刻度上的读数
    for (i = 0; i < (value as Array<number>).length; i++) {
        curDeg = attr.begin as number + distanceDeg * (i + (attr["value-position"] == 'mark' ? 0 : 0.5))
        textHelpDeg = curDeg % (Math.PI * 2)

        p1 = rotate(
            attr.cx as number, attr.cy as number,
            curDeg,
            (attr.cx as number) + (attr.radius as number) + (attr["font-rotate"] && !attr['small-mark'] ? 15 : 25) * (attr["mark-direction"] == 'inner' ? -1 : 1), (attr.cy as number)
        )

        if (attr["font-rotate"]) {
            painter.fillText((value as Array<number>)[i], p1[0], p1[1], curDeg + ((
                textHelpDeg > 0 && textHelpDeg < Math.PI ||
                textHelpDeg > -2 * Math.PI && textHelpDeg < -Math.PI
            ) ? -Math.PI * 0.5 : Math.PI * 0.5))
        } else {
            painter.fillText((value as Array<number>)[i], p1[0], p1[1])
        }

    }

    return painter

}