import React from 'react'

interface StateType {
    YourComponent: any
}

export default (lazyFunction: any) => {

    return class MyComponent extends React.Component {
        constructor(props: any) {
            super(props)
            this.state = {
                YourComponent: null
            }
        }

        componentDidMount() {
            lazyFunction().then((module: any) => {
                this.setState({
                    YourComponent: module.default
                })

            })
        }
        render() {
            let { YourComponent } = this.state as StateType

            if (YourComponent) {
                return <YourComponent {...this.props}></YourComponent>
            } else {
                return null
            }
        }
    }
}
