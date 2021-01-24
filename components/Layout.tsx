import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {FormControl, Navbar, Button, NavLink, Nav } from "react-bootstrap";

const Layout = () => {
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
            <form>
                <FormControl type={"text"} placeholder={"Search"} className={"mr-sm-3"} />
                <Button variant={"outline-light"}>Search</Button>
            </form>
        </Navbar>
    </div>

    )
}






export default Layout
