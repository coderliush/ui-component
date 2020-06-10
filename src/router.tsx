/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2020-06-08 20:39:03
 * @LastEditors: liushuhao
 */
import React, { FC, Suspense } from 'react'
import { Switch, routerRedux, Route } from 'dva/router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { getRouterData } from './common/router'

import Code from './routes/code'
const { ConnectedRouter } = routerRedux

interface DvaInstance {
    _models: any
    _store: any
    _plugin: any
    use: (...args: any[]) => any
    model: any
    start: any
}

interface Props {
    history: any,
    app: DvaInstance,
}

interface IRoute {
    path: string,
    component: FC
}

function RouterConfig({ history, app }: Props) {
    const routes = getRouterData(app)
    console.log('te', routes)
    return (
        <ConfigProvider locale={zhCN}>
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.map((route, i) => (
                        RouteWithSubRoutes(route)
                    ))}
                </Switch>
            </ConnectedRouter>
        </ConfigProvider>
    )
}

const RouteWithSubRoutes = (route: IRoute) => (
    // <Route exact={(route.routes && route.routes.length > 0) ? false : true} path={route.path} key={route.path} render={props => (
    //     <route.component {...props} routes={route.routes} />
    // )} />
    <Route path={route.path}>
        <Suspense fallback={<div>Loading...</div>}>
            <route.component />
        </Suspense>
    </Route>
)
export default RouterConfig