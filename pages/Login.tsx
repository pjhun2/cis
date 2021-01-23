import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import Layout from "../components/Layout";
import {CSSProperties} from "react";



const LoginPage = () => (
    <Layout title="Login">
        <html>
        <head>

        </head>
        <body>
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <link className="navbar-brand" href="/"><a>자동거래 사이트</a></link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <link href="/"/>
                        <a>메인</a></li>
                    <li>
                        <link href="Login"/>
                        <a>로그인</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle"
                           data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false"> 접속하기 <span className="caret"> </span></a>
                        <ul className="dropdown-menu">
                            <li className="active"><a href="login">로그인</a></li>
                            <li><a href="join">회원가입</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container">
            <div className="col-lg-4"/>
            <div className="col-lg-4">
                <div className="jumbotron" style={mystyle}>
                    <form method="post" action="loginAction">
                        <h3 style={mystyle1}> 로그인 화면 </h3>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="아이디" name="userID" maxLength={20}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="비밀번호" name="uerPassword"
                                   maxLength={20}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="이름" name="uerPassword"
                                   maxLength={20}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email" name="uerPassword"
                                   maxLength={20}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Phone" name="uerPassword"
                                   maxLength={20}/>
                        </div>
                        <input type="submit" className="btn btn-primary form-control" value="로그인"/>
                    </form>
                </div>
            </div>
        </div>
        </body>
        </html>
    </Layout>

);

const mystyle: CSSProperties = {
    paddingTop: "20px",
}
const mystyle1: CSSProperties = {
    textAlign: "center",
}

export default LoginPage
