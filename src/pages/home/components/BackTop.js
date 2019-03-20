import React, { PureComponent } from "react";
import * as Ele from "../style";

class BackTop extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            showBackTop: false
        }
        this.handleShowBackTop = this.handleShowBackTop.bind(this);
        this.handleBackTop = this.handleBackTop.bind(this);
    }

    render() {
        return (
            <Ele.BackTop
                onClick={ this.handleBackTop }
                title="回到顶部"
                className={
                    this.state.showBackTop
                        ? "iconfont icon-Upward"
                        : "iconfont icon-Upward hide"
                }
            />
        );
    }

    componentDidMount() {
        this.bandleScrollEvent();
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleShowBackTop);
    }
    bandleScrollEvent() {
        window.addEventListener("scroll", this.handleShowBackTop);
    }

    handleBackTop() {
        console.log("test");
        let step = 20;
        let timer = setInterval(function() {
            let currentTop = document.documentElement.scrollTop;
            if (currentTop <= step) {
                window.scrollTo(0, 0);
                clearInterval(timer);
            }
            console.log(currentTop);
            window.scrollTo(0, currentTop - step);
        }, 1);
    }
    handleShowBackTop(){
        if (document.documentElement.scrollTop > 200) {
            this.setState({
                showBackTop: true
            })
        } else {
            this.setState({
                showBackTop: false
            })
        }
    }
}

export default BackTop;
