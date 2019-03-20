import React, { PureComponent } from "react";
import * as Ele from "./style";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { Redirect } from "react-router-dom";
import * as actionCreaters from './store/actionCreaters';

class Login extends PureComponent {
    render() {
        const { loginFlag } = this.props;
        return loginFlag ? (
            <Redirect to="/"/>
        ) : (
            <Ele.LoginWrapper>
                <div className="main">
                    <Input
                        className="account"
                        ref={input => (this.account = input)}
                        placeholder="手机号或邮箱"
                    />
                    <Input
                        className="psw"
                        type="password"
                        ref={input => (this.password = input)}
                        placeholder="密码"
                    />
                    <Button
                        className="login"
                        onClick={() => {
                            this.props.handleLogin(this.account, this.password);
                        }}
                        type="primary"
                    >
                        登陆
                    </Button>
                </div>
            </Ele.LoginWrapper>
        );
    }
}

const mapState = state => ({
    loginFlag: state.getIn(["login", "loginFlag"])
});

const mapDispatch = dispatch => ({
    handleLogin(account, password) {
        const accountData = account.input.value;
        const passwordData = account.input.value;
        dispatch(actionCreaters.getLoginData(accountData,passwordData));
    }
});

export default connect(
    mapState,
    mapDispatch
)(Login);
