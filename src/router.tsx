/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2020-06-08 20:39:03
 * @LastEditors: liushuhao
 */
import React, { ReactElement } from 'react'
import { Switch, routerRedux, Route } from 'dva/router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { getRouterData } from './common/router'
import { DvaInstance } from './common/ts-types'
const { ConnectedRouter } = routerRedux

interface Props {
    history: any,
    app: DvaInstance,
}

interface IRoute {
    path: string,
    component: Function,
    routes?: IRoute[]
}

function RouterConfig({ history, app }: Props): ReactElement {
    const routes = getRouterData(app)
    return (
        <ConfigProvider locale={zhCN}>
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.map((route: IRoute) => (
                        RouteWithSubRoutes(route)
                    ))}
                </Switch>
            </ConnectedRouter>
        </ConfigProvider>
    )
}

const RouteWithSubRoutes = (route: IRoute): ReactElement => (
    <Route 
        exact={(route.routes && route.routes.length > 0) ? false : true} 
        path={route.path} 
        key={route.path} 
        render={props => (
            <route.component {...props} routes={route.routes} />
        )} 
    />
)
export default RouterConfig