/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2020-06-09 20:29:07
 * @LastEditors: liushuhao
 */ 
import React from "react"
import { Result } from 'antd'
import { Link } from 'dva/router'

export default () => (<Result
    status="404"
    title="404"
    subTitle="code split"
    extra={<Link to="/">Back Home</Link>}
/>)
