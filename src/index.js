import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'

import App from '@/App'
// 样式重置用的
import "normalize.css"
import "./assets/css/index.less"
import store from './store'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * 1.Suspense配合route的lazy懒加载，实现组件未渲染前展示loading效果
 * 2.Provider提供store中的reducer数据，挂载到全局环境中
 * 3.ThemeProvider提供theme样式，挂载到全局环境中
 * 4.HashRouter：哈希路由，导航界面
 * * http://localhost:3000/#/detail
 * http协议；localhost=127.0.0.1 ip地址；3000 端口；/# 哈希路由标志；/detail 路由到具体页面
 * */

root.render(
  // <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App/>
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  // </React.StrictMode>
);
