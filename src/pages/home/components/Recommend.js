import React, { PureComponent } from "react";
import * as Ele from "../style";
import { connect } from "react-redux";

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <Ele.Container>
                {list.map(item => (
                    <a key={item.get("id")}>
                        <img alt="" src={item.get("imgUrl")} />
                    </a>
                ))}
            </Ele.Container>
        );
    }
}

const mapState = state => ({
    list: state.getIn(["home", "recommendList"])
});

const mapDispatch = dispatch => ({});

export default connect(
    mapState,
    mapDispatch
)(Recommend);
