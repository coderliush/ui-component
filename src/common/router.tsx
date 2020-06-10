/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2020-06-08 20:43:27
 * @LastEditors: liushuhao
 */
import React, { createElement, lazy  } from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
const Error =  lazy(() => import('../routes/error/404')) 
const Code = lazy(() => import('../routes/code')) 

console.log('Code', Error)
const globalSpin = {
    "width": "100%",
    "margin": "100px 0"
}

// const modelNotExisted = (app: , model) =>
//     // eslint-disable-next-line
//     !app._models.some(({ namespace }) => {
//         return namespace === model.substring(model.lastIndexOf('/') + 1)
//     })

// const dynamicWrapper = (app, models, component) => {
    // models.forEach(model => {
    //     if (modelNotExisted(app, model)) {
    //         // eslint-disable-next-line
    //         app.model(require(`../models/${model}`).default)
    //     }
    // })
    // if (component.toString().indexOf('.then(') < 0) {
    //     return props => {
    //         return createElement(component().default, {
    //             ...props
    //         })
    //     }
    // }
    // return Loadable({
    //     loader: () => {
    //         return component().then(raw => {
    //             const Component = raw.default || raw
    //             return props =>
    //                 createElement(Component, {
    //                     ...props
    //                 })
    //         })
    //     },
    //     loading: ({ error, pastDelay }) => {
    //         if (pastDelay) {
    //             return <Spin size="large" style={globalSpin} />
    //         } else {
    //             return null
    //         }
    //     },
    // })
// }

export const getRouterData = (app: any) => ([
    {
        path: '/error/404',
        // component: dynamicWrapper(app, [], () => import("../routes/error/404")),
        component: Error,
    },
    {
        path: '/code',
        // component: dynamicWrapper(app, [], () => import("../routes/code")),
        component: Code
    }
])
