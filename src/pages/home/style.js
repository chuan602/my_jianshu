import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    float: left;
    padding-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        height: 270px;
        width: 625px;
        border-radius: 5px;
    }
    .split-line {
        margin: 40px 0 15px;
        border-top: 1px solid #f0f0f0;
    }
`;
export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    background-color: red;
`;
export const ListItem = styled.div`
    padding: 15px 0 20px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #f0f0f0;
    .box {
        position: relative;
        padding-right: 165px;
        .title {
            display: block;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 18px;
            margin-bottom: 4px;
            font-weight: 700;
            line-height: 1.5;
            color: #333;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        .content {
            margin: 0 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
            height: 48px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .img-box {
            position: absolute;
            width: 150px;
            top: 50%;
            right: 0;
            margin-top: -50px;
            height: 100px;
        }
        img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            border: 1px solid #f0f0f0;
        }
        .meta {
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            a,
            span {
                margin-right: 10px;
                font-size: 12px;
                color: #b4b4b4;
                text-decoration: none;
                outline: 0;
                &::before {
                    margin-right: 5px;
                }
            }
            a:hover {
                color: #787878;
            }
        }
        .nickname {
        }
    }
`;
export const Container = styled.div`
    padding-top: 30px;
    width: 100%;
    a {
        width: 100%;
        display: block;
        overflow: hidden;
        cursor: pointer;
        margin-bottom: 11px;
        line-height: 0;
        margin-top: -5px;
        img {
            width: 100%;
            height: 50px;
            border-radius: 4px;
            border: 0;
            box-sizing: border-box;
        }
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background-color: #a5a5a5;
    text-align: center;
    margin: 30px 0;
    font-size: 15px;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
`;
export const NoMore = styled.div`
    width: 100%;
    height: 40px;
    text-align: center;
    margin: 30px 0;
    font-size: 15px;
    font-style: italic;
    line-height: 40px;
    color: #aaa;
`;
export const BackTop = styled.div`
    &::before {
        font-size: 25px;
        color: #999;
        line-height: 50px;
    }
    &:hover {
        background-color: hsla(0, 0%, 71%, 0.1);
    }
    &.hide{
        visibility: hidden;
    }
    position: fixed;
    right: 50px;
    bottom: 50px;
    height: 50px;
    width: 50px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #dcdcdc;
    background-color: #fff;
`;
