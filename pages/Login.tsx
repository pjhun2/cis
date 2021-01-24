import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

import {CSSProperties, Component } from "react";
// import {useRouter} from 'next/router'
import {FormControl, InputGroup, Navbar, Button} from "react-bootstrap";

const LoginPage = () => {
    // const router = useRouter()
    return(
        <div>
            <Navbar className={"hg-light justify-content-between"} >
                <form>
                    <div style={LogoStyle}>
                    <Navbar bg="blue" variant="light">
                        <Navbar.Brand href="/"><h1>Logo</h1></Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar>
                    </div>
                    <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
                    </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
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
                    <div style={SubmitStyle}>
                    <Button type="submit">로그인</Button>
                    </div>
                    </form>
            </Navbar>
            </div>
     )
}

//const titleStyles:CSSProperties = {
//    display: "flex",
//    alignItems: "center",
//    width: "1000px",
//    justifyContent: "center",
//}

const SubmitStyle:CSSProperties = {
    display: "flex",
    alignItems: "center",
    width: "1000px",
    justifyContent: "center",
}

const LogoStyle:CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}




export default LoginPage
