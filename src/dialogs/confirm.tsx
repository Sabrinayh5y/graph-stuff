import React from 'react'

import store from '../stores/index'

class confirm extends React.Component {

    data: any

    constructor(props: any) {
        super(props)

        this.data = props.data
    }

    closeDialog(flag: boolean) {
        store.dispatch({
            type: "closeDialog",
            data: flag
        })
    }

    render() {
        return (<div style={{
            position: "fixed",
            width: "300px",
            left: "calc(50vw - 150px)",
            top: "200px",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 1px 0 #607d8b"
        }}>
            <h2 style={{
                backgroundColor: "#f44336",
                color: "white",
                fontSize: "16px",
                padding: "10px"
            }}>
                {this.data && this.data[0]}
            </h2>
            <div style={{ lineHeight: "100px", fontSize: "14px", textAlign: "center", padding: "10px" }}>
                {this.data && this.data[1]}
            </div>
            <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                <button onClick={() => this.closeDialog.call(this, true)} style={{ marginRight: "20px", cursor: "pointer", backgroundColor: "#2196f3", color: "white" }}>确定</button>
                <button onClick={() => this.closeDialog.call(this, false)} style={{ cursor: "pointer" }}>取消</button>
            </div>
        </div >)
    }
}


export default confirm