/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2020-06-08 20:48:24
 * @LastEditors: liushuhao
 */ 
import React from "react"
import { Result } from 'antd'
import { Link } from 'dva/router'

export default () => (<Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/">Back Home</Link>}
/>)

