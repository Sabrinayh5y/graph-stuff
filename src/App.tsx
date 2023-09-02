import React from 'react'
import { useRoutes } from "react-router-dom"
import LazyComponent from './components/lazy-component'

import './styles/App.scss'

import store from './stores/index'
import dialogs from './dialogs/lazy-load'

// 引入页面
let Index = LazyComponent(() => import('./pages/Index/index'))
let TreeLR = LazyComponent(() => import('./pages/TreeLR/index'))
let PieSimple = LazyComponent(() => import('./pages/PieSimple/index'))
let GaugeBarometer = LazyComponent(() => import('./pages/GaugeBarometer/index'))
let TreeTB = LazyComponent(() => import('./pages/TreeTB/index'))
let LineMultipleXAxis = LazyComponent(() => import('./pages/LineMultipleXAxis/index'))
let MoneySchedule = LazyComponent(() => import('./pages/MoneySchedule/index'))

const App: React.FC = (): JSX.Element => {
  const routing = useRoutes([
    {
      path: "/MoneySchedule",
      element: <MoneySchedule />
    },
    {
      path: "/LineMultipleXAxis",
      element: <LineMultipleXAxis />
    },
    {
      path: "/TreeLR",
      element: <TreeLR />
    },
    {
      path: "/PieSimple",
      element: <PieSimple />
    },
    {
      path: "/GaugeBarometer",
      element: <GaugeBarometer />
    },
    {
      path: "/TreeTB",
      element: <TreeTB />
    },
    {
      path: "/",
      element: <Index />
    }
  ])

  class UiDialog extends React.Component {
    constructor(props: any) {
      super(props)

      this.state = {
        pages: []
      }

      // 监听store改变
      store.subscribe(() => {
        this.setState({
          pages: store.getState()["dialogInstance"]
        })

      })
    }

    render() {
      return (<div className="dialog-view">
        {/* 统一遮罩 */}
        <div className="mask"></div>
        {
          (this.state as any).pages.map((item: any, index: any) => <div key={index}>{(() => {
            let NyDialog = (dialogs as any)[item.id]

            return (<NyDialog data={item.data}></NyDialog>)
          })()}</div>)
        }</div>)
    }
  }

  let openInfo = () => {
    store.dispatch({
      type: "openDialog",
      data: {
        id: "info"
      }
    })
  }

  return <>

    {/* 主体内容 */}
    <div className="main-view">
      {routing}
    </div>

    {/* 弹框 */}
    <UiDialog></UiDialog>

    <button className='info-btn' onClick={openInfo}>
      查看详情
    </button>
  </>
}

export default App
