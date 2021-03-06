import React, { useState, ReactElement } from 'react'
import { Divider, Input, Menu, Button, Layout } from 'antd'
import styles from './index.css'

console.log('styles', styles)
const { Header } = Layout

export default function Index(): ReactElement {
    enum Language {
        zh = '中文',
        en = 'English'
    }

    const [language, setLanguage] = useState(Language.zh)
    const onClickLanguage = () => {
        language === Language.zh ? setLanguage(Language.en) : setLanguage(Language.zh)
    }
    return (
        <Header className={styles.test}>
            <div className={styles.test}>
                <img className="w-16 text-center" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
                <p>Ui components</p>
            </div>
            <Divider type="vertical" />
            <Input placeholder="在 ui component 中搜索" />
            <div className="menu-list">
                <Menu mode="horizontal">
                    <Menu.Item key="components">组件</Menu.Item>
                    <Menu.Item key="language">
                        <Button onClick={onClickLanguage}>English</Button>
                    </Menu.Item>
                </Menu>
            </div>
        </Header>
    )
}
