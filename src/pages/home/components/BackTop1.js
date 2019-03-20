import React, { PureComponent } from "react";
import * as Ele from "../style";
import { connect } from "react-redux";
import * as actionCreaters from "../store/actionCreaters";

class BackTop extends PureComponent {
    render() {
        return (
            <Ele.BackTop
                onClick={ this.handleBackTop }
                title="回到顶部"
                className={
                    this.props.showBackTop
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
        window.removeEventListener("scroll", this.props.handleShowBackTop);
    }
    bandleScrollEvent() {
        window.addEventListener("scroll", this.props.handleShowBackTop);
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
}

const mapState = state => ({
    showBackTop: state.getIn(["home", "showBackTop"])
});

const mapDispatch = dispatch => ({
    handleShowBackTop() {
        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreaters.changeShowBackTop(true));
        } else {
            dispatch(actionCreaters.changeShowBackTop(false));
        }
    }
});

export default connect(
    mapState,
    mapDispatch
)(BackTop);
