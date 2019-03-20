import React from 'react'
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
    //要异步加载的组件
    loader: () => import("./index"),
    //在组件异步加载出来前显示的过渡组件
    loading: () => <h3>正在加载中...</h3>
});
    //导出这个异步加载组件
export default () => <LoadableComponent/>
