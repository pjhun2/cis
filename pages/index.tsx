import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {Navbar, NavLink, Nav } from "react-bootstrap";

const index = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Nav className={"mr-auto"}>
                    <NavLink href={"/exchange"}>거래소</NavLink>
                    <NavLink href={"/blances"}>입출금</NavLink>
                    <NavLink href={"/exlog"}>거래내역</NavLink>
                    <NavLink href={"/exauto"}>자동거래</NavLink>
                </Nav>
                <Nav>
                <NavLink href="/Login">로그인</NavLink>
                <NavLink href="/Join">회원가입</NavLink>
                </Nav>
            </Navbar>
        </div>

    )
}



export default index