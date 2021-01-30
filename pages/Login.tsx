import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import {CSSProperties } from "react";
import {FormControl, InputGroup, Navbar, Button } from "react-bootstrap";


const LoginPage = () => {
    // const router = useRouter()
    return (
        <Navbar className={"hg-light justify-content-between"} style={background}>
            <div style={titleStyles}>
                <Navbar bg="blue" variant="light" >
                    <Navbar.Brand style={LogoStyles} href="/"><h1>Logo</h1></Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar>
                <InputGroup style={InputStyles}>
                    <InputGroup.Prepend >
                        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <br/>
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
                <br/>
                <Button variant="outline-primary">로그인</Button>
                <br/>
                <Button variant="outline-secondary" href={"/Join"}>회원가입</Button>
            </div>
        </Navbar>
    );
}

//const titleStyles:CSSProperties = {
//    display: "flex",
//    alignItems: "center",
//    width: "1000px",
//    justifyContent: "center",
//}

const titleStyles:CSSProperties = {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
}

const background:CSSProperties = {
    width: "100%",

    backgroundColor: "white",
}

const InputStyles:CSSProperties = {
    width: "600px",
}

const LogoStyles:CSSProperties = {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
}

// 화면의 중앙에 위치시킨다

export default LoginPage
