import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import Layout from "../components/Layout";
import {CSSProperties} from "react";
// import {useRouter} from 'next/router'
import {FormControl, InputGroup, Navbar, Button} from "react-bootstrap";

const LoginPage = () => {
    // const router = useRouter()
    return(
        <Layout>
            <div style={titleStyles}>
            <Navbar className={"hg-light justify-content-between"} >
                <form>
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
                    <Button type="submit">Submit</Button>
                 </form>

            </Navbar>
            </div>
            {/*<div onClick={() => router.push('/')} style={titleStyles}>*/}
            {/*    홈*/}
            {/*</div>*/}
        </Layout>
    )
}

const titleStyles:CSSProperties = {
    display: "flex",
    alignItems: "center",
    width: "1000px",
    justifyContent: "center",

}


export default LoginPage
