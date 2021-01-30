import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import {CSSProperties} from "react";
// import {useRouter} from 'next/router'
import {FormControl, InputGroup, Navbar, Button, ListGroup, Dropdown, DropdownButton } from "react-bootstrap";

const Login = () => {
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
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-2"
                        >
                        <Dropdown.Item href="#">@naver.com</Dropdown.Item>
                        <Dropdown.Item href="#">@google.com</Dropdown.Item>
                        <Dropdown.Item href="#">@kakao.com</Dropdown.Item>
                    </DropdownButton>
                    </InputGroup>
                    <br/>
                    <InputGroup style={InputStyles}>
                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br />
                    <Button style={SubmitStyle}>로그인</Button>
                    <div style={infoStyles}>
                        <a class="text-black-50" href="Join">회원가입</a>
                        <ul style={LinkStyles}>
                            <li>
                                <a class="text-black-50" href="Join">아이디 찾기 </a>

                                <a class="text-black-50" href="Join">비밀번호 찾기</a>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <ListGroup variant="flush">
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                    <Button style={naverStyles} block>네이버 로그인</Button>

                    <Button style={googleStyles}   block>구글 로그인</Button>

                    <Button style={kakaoStyles} block>카카오 로그인</Button>
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
    height: "40px",
    color: "#000000",
    borderColor: "black",
}

const InputStyles:CSSProperties = {
    width: "400px",
    height: "42px",
    flex: "1 1 auto",
}

const infoStyles:CSSProperties = {
    display: "block",
    height: "0px",
    fontSize: "10",
    clear: "both",
    content: " ",
}

const divStyles:CSSProperties = {
    position: "relative",
    border: "1px solid #e5e5e5",
    margin: "40px auto",
    padding: "58px 69px 100px",
    borderRadius: "2px",
    boxSizing: "border-box",
}

const LinkStyles:CSSProperties = {
    display: "inline-block",
    listStyle: "none",
    float: "right",
}

const naverStyles:CSSProperties = {
    background: "#80E12A",
    border: "0px",
    color: "#000000",


}
const googleStyles:CSSProperties = {
    background: "whitesmoke",
    border: "0px",
    color: "#000000",
    marginTop: "13px",
}
const kakaoStyles:CSSProperties = {
    background: "#FFEB46",
    border: "0px",
    color: "#000000",
    marginTop: "13px",
}





export default Login


