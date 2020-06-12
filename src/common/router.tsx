/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2020-06-08 20:43:27
 * @LastEditors: liushuhao
 */
import React, { createElement } from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
import { DvaInstance } from './ts-types'

interface Namespace {
    namespace: string
}

const globalSpin = {
    "width": "100%",
    "margin": "100px 0"
}

const modelNotExisted = (app: DvaInstance, model: string) =>
    // eslint-disable-next-line
    !app._models.some(({ namespace }: Namespace) => {
        return namespace === model.substring(model.lastIndexOf('/') + 1)
    })

// ? dynamicWrapper 返回类型
const dynamicWrapper = (app: DvaInstance, models: string[], component: Function) => {
    models.forEach(model => {
        if (modelNotExisted(app, model)) {
            // eslint-disable-next-line
            app.model(require(`../models/${model}`).default)
        }
    })
    if (component.toString().indexOf('.then(') < 0) {
        return (props: any) => {
            return createElement(component().default, {
                ...props
            })
        }
    }
    return Loadable({
        loader: () => {
            return component().then((raw: any) => {
                const Component = raw.default || raw
                return (props: any) =>
                    createElement(Component, {
                        ...props
                    })
            })
        },
        loading: ({ error, pastDelay }) => {
            if (pastDelay) {
                return <Spin size="large" style={globalSpin} />
            } else {
                return null
            }
        },
    })
}

export const getRouterData = (app: any) => ([
    {
        path: '/',
        component: dynamicWrapper(app, [], () => import("../layouts/basicLayout")),
    },
    {
        path: '/error/404',
        component: dynamicWrapper(app, [], () => import("../routes/error/404")),
    },
    {
        path: '/code',
        component: dynamicWrapper(app, [], () => import("../routes/code")),
    }
])
