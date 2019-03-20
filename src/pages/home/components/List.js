import React, { PureComponent } from "react";
import { ListItem, LoadMore, NoMore } from "../style";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionCreaters";
import { Link } from "react-router-dom";

class List extends PureComponent {
    render() {
        const {
            newsList,
            showLoadMore,
            handleLoadMore,
            curPage,
            totPage
        } = this.props;
        return (
            <div>
                {newsList.map(item => (
                    <ListItem key={item.get("id")}>
                        <div className="box">
                            <Link className="title" to={"/detail/" + item.get("id")} >
                                {item.get("title")}
                            </Link>
                            <p className="content">{item.get("desc")}</p>
                            <div className="meta">
                                <a className="nickname" href="javascript:;">
                                    {item.get("user")}
                                </a>
                                <a
                                    className="comment iconfont icon-pinglun2"
                                    href="javascript:;"
                                >
                                    {item.get("commend")}
                                </a>
                                <span className="like iconfont icon-zan">
                                    {item.get("like")}
                                </span>
                            </div>
                            <a className="img-box" href="javascript:;">
                                <img alt="" src={item.get("imgUrl")} />
                            </a>
                        </div>
                    </ListItem>
                ))}
                {showLoadMore ? (
                    <LoadMore
                        onClick={() => {
                            handleLoadMore(curPage, totPage);
                        }}
                    >
                        阅读更多
                    </LoadMore>
                ) : (
                    <NoMore>没有更多内容了</NoMore>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newsList: state
        .getIn(["home", "newsList"])
        .slice(0, state.getIn(["home", "currentPage"]) * 5),
    curPage: state.getIn(["home", "currentPage"]),
    totPage: state.getIn(["home", "totalPage"]),
    showLoadMore: state.getIn(["home", "showLoadMore"])
});

const mapDispatchToProps = dispatch => ({
    handleLoadMore(curPage, totPage) {
        if (curPage === totPage - 1) {
            dispatch(actionCreators.changeShowLoadMore(false));
        }
        dispatch(actionCreators.changeCurPage(++curPage));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
