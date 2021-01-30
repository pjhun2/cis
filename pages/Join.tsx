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
                    <br/>
                    <InputGroup style={InputStyles}>
                        <FormControl
                            placeholder="name"
                            aria-label="name"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br />
                    <Alert show={show} style={AlertStyles} >
                            <Button className="text-right" onClick={() => setShow(false)} >
                                인증번호 전송
                            </Button>
                    </Alert>
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
                    <br />
                    <InputGroup style={InputStyles}>
                        <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
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
                     {<Button>가입하기</Button>}

                    <br/>
                    <p className="forgot-password text-right">
                        이미 가입한 계정이 있으신가요? <a href="Login">로그인</a>
                    </p>


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
    backgroundColor: "white",
    color: "black",
}



export default AlertDismissible;


