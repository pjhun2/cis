import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

import {CSSProperties} from "react";
// import {useRouter} from 'next/router'
import {FormControl, InputGroup, Navbar, Button} from "react-bootstrap";

const Join = () => {
    // const router = useRouter()
    return(
        <div style={titleStyles}>
            <Navbar className={"hg-light justify-content-between"} >
                <form>
                    <Navbar bg="blue" variant="light">
                        <Navbar.Brand href="/"><h1>Logo</h1></Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar>
                    <br />
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
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Phone"
                            aria-label="Phone"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">계좌</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="bank"
                            aria-label="bank"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <br />
                    <Button type="submit">가입하기</Button>
                </form>

            </Navbar>
        </div>
    )
}

const titleStyles:CSSProperties = {
    display: "flex",
    alignItems: "center",
    width: "900",
    height: "98",
    justifyContent: "center",

}


export default Join
