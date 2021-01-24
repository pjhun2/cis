import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

import {CSSProperties } from "react";
import {FormControl, InputGroup, Navbar, Button} from "react-bootstrap";



const LoginPage = () => {
    // const router = useRouter()
    return(

            <Navbar className={"hg-light justify-content-between"} >
                <div style={titleStyles}>
                    <Navbar bg="blue" variant="light">
                        <Navbar.Brand href="/"><h1>Logo</h1></Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar>
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
                            <InputGroup.Text  id="basic-addon1">PW</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br />
                    <Button variant="outline-primary">로그인</Button>
                    <br />
                    <Button variant="outline-secondary" href={"/Join"}>회원가입</Button>



                    </div>
            </Navbar>

     )
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


export default LoginPage
