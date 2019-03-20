import React, { PureComponent } from "react";
import * as Ele from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import BackTop from "./components/BackTop";
import { connect } from "react-redux";
import * as actionCreaters from "./store/actionCreaters";

class Home extends PureComponent {
    render() {
        return (
            <Ele.HomeWrapper>
                <Ele.HomeLeft>
                    <img
                        alt=""
                        className="banner-img"
                        src="//upload.jianshu.io/admin_banners/web_images/4576/feab4469e6317fe3627d23d80fd6d0da09b556e3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                    />
                    <div className="split-line" />
                    <List />
                </Ele.HomeLeft>
                <Ele.HomeRight>
                    <Recommend />
                    <Writer />
                </Ele.HomeRight>

                <BackTop />
            </Ele.HomeWrapper>
        );
    }
    componentDidMount() {
        this.props.initStore();
    }
}


const mapDispatch = dispatch => ({
    initStore() {
        dispatch(actionCreaters.initStore());
    }
});

export default connect(
    null,
    mapDispatch
)(Home);
