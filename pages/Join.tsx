import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import {CSSProperties} from "react";
// import {useRouter} from 'next/router'
import {FormControl, InputGroup, Navbar, Button, Alert } from "react-bootstrap";
import useState from "@restart/hooks/useStateAsync";

function AlertDismissible() {
    const [show, setShow] = useState(true);
     return (

            <Navbar className={"hg-light justify-content-between"}>
                <div style={SubmitStyle}>
                    <Navbar bg="blue" variant="light">
                        <Navbar.Brand href="/"><h1>Logo</h1></Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar>
                    <div style={divStyles}>
                    <br/>
                    <InputGroup style={InputStyles}>
                        <FormControl
                            placeholder="이메일"
                            aria-label="이메일"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Alert show={show} style={AlertStyles} >
                            <Button style={ButtonStyles} className="text-center" onClick={() => setShow(false)} >
                                인증번호 전송
                            </Button>
                    </Alert>
                        <br />
                    {!show && <InputGroup style={AuthStyles}>
                        <FormControl
                            placeholder="인증번호 입력"
                            aria-label="인증번호 입력"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-primary">재전송</Button>
                        </InputGroup.Append>
                    <br />
                    </InputGroup> }
                     <br/>
                    <InputGroup style={InputStyles}>
                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup style={InputStyles}>
                        <FormControl
                            placeholder="Confirm Password"
                            aria-label="Confirm Password"
                            aria-describedby="basic-addon1"
                        />

                    </InputGroup>
                        <br />
                        <InputGroup style={InputStyles}>
                            <FormControl
                                placeholder="이름"
                                aria-label="이름"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <br />
                   <Button style={SubmitStyle}>가입하기</Button>
                    <br />
                    <p className="forgot-password text-right">
                        이미 가입한 계정이 있으신가요? <a href="Login">로그인</a>
                    </p>


                </div>
                </div>
            </Navbar>


        )
    }



const SubmitStyle:CSSProperties = {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
}

const InputStyles:CSSProperties = {
    width: "400px",
    height: "42px",
    flex: "1 1 auto",
}

const AuthStyles:CSSProperties = {
    background: "white",
    fontSize: "small",
    justifyContent: "right",
    textAlign: "right",
    font: "initial",
}

const AlertStyles:CSSProperties = {
    display: "grid",
    alignItems: "right",
    justifyContent: "right",
    margin: "0px",
    padding: "0px",
}

const ButtonStyles:CSSProperties = {
    backgroundColor: "white",
    color: "black",
    width: "110px",
    height: "35px",
    borderRadius: "25px",
    border: "0.5px solid #b3b3b3",
    fontSize: "12px",
    marginTop: "10px",
}

const divStyles:CSSProperties = {
    position: "relative",
    border: "1px solid #e5e5e5",
    margin: "40px auto",
    padding: "58px 69px 110px",
    borderRadius: "2px",
    boxSizing: "border-box",
}

export default AlertDismissible;


