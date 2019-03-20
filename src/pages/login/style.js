import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    .main {
        width: 400px;
        margin: 100px auto 0;
        padding: 50px 50px 30px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        vertical-align: middle;
        display: inline-block;
    }
    .account{
        margin-bottom: 5px;
        z-index: 0;
    }
    .psw{
        z-index: 0;
    }
    .login{
        margin-top: 10px;
        width: 100%;
        z-index: 0;
    }
`;
