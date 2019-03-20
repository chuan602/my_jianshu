import React from "react";
import {
    HeaderDiv,
    HeaderLogo,
    Nav,
    NavUl,
    NavLi,
    NavA,
    NavInput,
    NavRight,
    NavBtn,
    NavInputBox,
    NavI,
    SearchInfo
} from "./css/style";
import * as Ele from "./css/style";
import { connect } from "react-redux";
import { inputFocusFun, inputBlurFun } from "./store/actionCreators";
import * as actionCreators from "./store/actionCreators";
import { logout } from '../../pages/login/store/actionCreaters';
import { Link } from "react-router-dom";

const Header = props => {
    const {
        focusFlag,
        handleInputFocus,
        handleInputBlur,
        currentList,
        currentPage,
        totalPage,
        mouseIn,
        handleMouseLeave,
        handleChangeClick,
        handleMouseIn,
        loginFlag,
        handleLogout
    } = props;
    return (
        <HeaderDiv>
            <Link to="/">
                <HeaderLogo />
            </Link>
            <Nav>
                <NavUl>
                    <NavLi>
                        <NavA className="active">首页</NavA>
                    </NavLi>
                    <NavLi>
                        <NavA>下载App</NavA>
                    </NavLi>
                    <NavLi>
                        <NavInputBox>
                            <NavInput
                                type="text"
                                placeholder="搜索"
                                className={focusFlag ? "focus" : ""}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            <NavI
                                className={
                                    focusFlag
                                        ? "iconfont icon-sousuo sousuo focus"
                                        : "iconfont icon-sousuo sousuo"
                                }
                            />
                            <SearchInfo
                                style={
                                    focusFlag || mouseIn
                                        ? { visibility: "visible" }
                                        : { visibility: "hidden" }
                                }
                                onMouseEnter={handleMouseIn}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Ele.SearchInfoTitleBox>
                                    <Ele.SearchInfoTitle>
                                        热门搜索
                                    </Ele.SearchInfoTitle>
                                    <Ele.SchInfoChg
                                        onClick={() => {
                                            handleChangeClick(
                                                currentPage,
                                                totalPage
                                            );
                                        }}
                                    >
                                        <i
                                            className="iconfont icon-shuaxin"
                                            style={{ marginRight: "3px" }}
                                        />
                                        换一批
                                    </Ele.SchInfoChg>
                                </Ele.SearchInfoTitleBox>
                                <Ele.SearchInfoList>
                                    {currentList.map(item => (
                                        <Ele.SearchInfoItem key={item}>
                                            {item}
                                        </Ele.SearchInfoItem>
                                    ))}
                                </Ele.SearchInfoList>
                            </SearchInfo>
                        </NavInputBox>
                    </NavLi>
                </NavUl>
            </Nav>
            <NavRight>
                <NavBtn className="a">Aa</NavBtn>
                {loginFlag ? (
                    <NavBtn onClick={ handleLogout } className="login">退出登陆</NavBtn>
                ) : (
                    <Link to="/login"><span className="login">登陆</span></Link>
                )}
                <NavBtn className="register">注册</NavBtn>
                <NavBtn className="writeArticle">
                    <i className="iconfont" style={{ marginRight: "3px" }}>
                        &#xe652;
                    </i>
                    写文章
                </NavBtn>
            </NavRight>
        </HeaderDiv>
    );
};

const mapStateToProps = state => {
    const jsList = [...state.getIn(["header", "searchList"]).toJS()];
    return {
        focusFlag: state.getIn(["header", "focusFlag"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        searchList: state.getIn(["header", "searchList"]),
        totalPage: state.getIn(["header", "totalPage"]),
        currentPage: state.getIn(["header", "currentPage"]),
        currentList: jsList.splice(
            (state.getIn(["header", "currentPage"]) - 1) * 10,
            10
        ),
        loginFlag: state.getIn(["login", "loginFlag"])
    };
};

const mapDispatchToProps = dispatch => {
    let ajaxFlag = true;
    return {
        handleInputFocus() {
            dispatch(inputFocusFun());
            if (ajaxFlag) {
                dispatch(actionCreators.getSearchList());
                ajaxFlag = false;
            }
        },
        handleInputBlur() {
            dispatch(inputBlurFun());
        },
        handleChangeClick(curPage, totPage) {
            if (curPage === totPage) {
                dispatch(actionCreators.changeCurPageFun(1));
                return;
            }
            dispatch(actionCreators.changeCurPageFun(++curPage));
        },
        handleMouseIn() {
            dispatch(actionCreators.ChangeMouseInFun());
        },
        handleMouseLeave() {
            dispatch(actionCreators.ChangeMouseLeaveFun());
        },
        handleLogout(){
            dispatch(logout())
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
