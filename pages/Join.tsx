import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

import {CSSProperties} from "react";
// import {useRouter} from 'next/router'
import {FormControl, InputGroup, Navbar, Button} from "react-bootstrap";

const Join = () => {
    // const router = useRouter()
    return(

            <Navbar className={"hg-light justify-content-between"} >
                <div style={SubmitStyle}>
                    <Navbar bg="blue" variant="light">
                        <Navbar.Brand href="/"><h1>Logo</h1></Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar>
                    <br />
                    <InputGroup style={InputStyles}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">중복확인</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">PW</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">닉네임</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="name"
                            aria-label="name"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br />
                    <Button type="submit">완료</Button>
                    <br/>
                    <p className="forgot-password text-right">
                        이미 가입한 계정이 있으신가요? <a href="./Login">로그인</a>
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
    width: "600px",
}

export default Join
