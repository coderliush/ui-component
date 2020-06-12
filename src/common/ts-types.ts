/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2020-06-10 15:57:56
 * @LastEditors: liushuhao
 */ 
export interface DvaInstance {
    _models: any
    _store: any
    _plugin: any
    use: (...args: any[]) => any
    model: any
    start: any
}

