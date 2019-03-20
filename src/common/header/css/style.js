import styled from "styled-components";
import logoPic from "../../../static/image/nav-logo.png";

export const HeaderDiv = styled.div`
    position: relative;
    height: 58px;
    line-height: 58px;
    border: 1px solid #f0f0f0;
`;
export const HeaderLogo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: url(${logoPic});
    background-size: 100% 100%;
`;
export const Nav = styled.div`
    width: 945px;
    height: 100%;
    margin: 0 auto;
`;

export const NavUl = styled.ul`
    height: 100%;
`;
export const NavLi = styled.li`
    display: inline-block;
    height: 100%;
    padding: 0 15px;
    margin-right: 10px;
`;
export const NavA = styled.a`
    &.active {
        color: #ea6f5a;
        height: 100%;
    }
    position: relative;
    width: 100%;
    color: #000;
    font-size: 17px;
    line-height: 58px;
`;
export const NavInputBox = styled.div`
    display: inline-block;
    width: auto;
    height: auto;
    position: relative;
    width: 100%;
    color: #000;
    font-size: 17px;
    line-height: 58px;
`;

export const NavInput = styled.input`
    &.focus {
        width: 220px;
    }
    transition: width 0.5s ease-in-out;
    width: 140px;
    height: 38px;
    border-radius: 19px;
    border-width: 0;
    font-size: 14px;
    background: #eee;
    padding: 0 40px 0 20px;
    &::placeholder {
        color: #666;
    }
`;

export const NavRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    .login {
        color: #969696;
        margin-right: 30px;
        padding: 0 5px;
        padding: 0 20px;
        display: inline-block;
        line-height: 36px;
        cursor: pointer;
        height: 36px;
        font-size: 15px;
    }
`;

export const NavBtn = styled.a`
    &.writeArticle {
        background-color: #ec6149;
        color: #fff;
        border-radius: 19px;
        border: 1px solid #ea6f5a;
        margin-right: 15px;
    }

    &.a {
        color: #969696;
        padding: 0 5px;
        margin-right: 15px;
    }
    &.register {
        border-radius: 19px;
        color: #ea6f5a;
        border: 1px solid #ea6f5a;
        margin-right: 15px;
    }
    padding: 0 20px;
    display: inline-block;
    line-height: 36px;
    cursor: pointer;
    height: 36px;
    font-size: 15px;
`;

export const NavI = styled.i`
    &.sousuo {
        position: absolute;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        line-height: 32px;
        text-align: center;
        right: 5px;
        top: 15px;
    }
    transition: all 0.5s ease-in-out;
    &.focus {
        background-color: #999;
        color: #fff;
    }
`;

export const SearchInfo = styled.div`
    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 50px;
    width: 240px;
    z-index: 1;
    background-color: #fff;
    margin-top: 9px;
    padding: 0 20px;
    border-radius: 4px;
    padding: 20px 20px 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitleBox = styled.div`
    height: 20px;
    line-height: 20px;
    margin-bottom: 20px;
`;
export const SearchInfoTitle = styled.div`
    float: left;
    font-size: 14px;
    color: #969696;
`;
export const SchInfoChg = styled.span`
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    cursor: pointer;
    &:hover {
        color: #2f2f2f;
    }
`;
export const SearchInfoList = styled.div`
    overflow: hidden;
`;
export const SearchInfoItem = styled.a`
    &:hover {
        color: #333;
        border-color: #b4b4b4;
    }
    display: block;
    float: left;
    line-height: 18px;
    font-size: 12px;
    padding: 0 10px;
    margin-bottom: 15px;
    color: #787878;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
`;
