import React, { Component } from "react";
import * as Ele from "./style";
import { connect } from 'react-redux';
import * as actionCreaters from './store/actionCreaters';
import { withRouter } from 'react-router-dom';

class Detail extends Component {
    render() {
        return (
            <Ele.DetailWrapper>
                <h1>{ this.props.title }</h1>
                <img alt="" src={this.props.img} />
                <p>{ this.props.content }</p>
            </Ele.DetailWrapper>
        );
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.sendAjax(id);
    }
}

const mapState = (state) => ({
    title: state.getIn(["detail","title"]),
    img: state.getIn(["detail","img"]),
    content: state.getIn(["detail","content"])
})

const mapDispatch = (dispatch) => ({
    sendAjax(id){
        dispatch(actionCreaters.ajaxGetData(id));
    }
})

export default connect(mapState,mapDispatch)(withRouter(Detail));
