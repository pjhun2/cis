import 'bootstrap/dist/css/bootstrap.css'
import React, {CSSProperties} from 'react'
import {Navbar, NavLink, Nav } from "react-bootstrap";


const index = () => {
    return (
        <div style={HeaderStyles}>
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

            <div style={MainStyles}>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/exchange"><h1>UMBI</h1></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/exlog"><h1>UBAI</h1></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/exchange"><h1>코인시세</h1></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <div style={AndroidStyles}>
                <Navbar bg="darkblue" variant="dark"></Navbar>
                     <p className="text-center mt-4 mb-4">빠르고 간편한 모바일 앱</p> <br />
                    <p className="text-center">간편한 안드로이드 앱 출시 예정입니다.</p>
            </div>

            <div style={SecStyles}>
                <p className="text-center mt-4 mb-4"><h1>안전한 자동거래 사이트</h1></p> <br />
                <h4>글로벌 최고 수준의 파트너들과 함께 가장 안전한 보안체계를 구축하였습니다.</h4>
            </div>

            <div style={FooterStyles}>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <h1>고객센터</h1> <br />
                        <h3>1234-1234</h3>
                    </Nav.Item>
                    <Nav.Item>
                        <h1>라운지</h1>
                        <h4>방문 상담은 라운지를 이용해주십시오.</h4> <br />
                        <h4>* 운영시간: 평일 90:00 ~ 18:00</h4>
                        <h4>* 서울특별시 cloud</h4>
                    </Nav.Item>
                    <Nav.Item>
                        <h1>자동분석 앱</h1> <br />
                        <h5>안드로이드</h5> <br />
                        <h5>아이폰 앱</h5> <br />
                    </Nav.Item>
                </Nav>
            </div>
        </div>

    )
}

const HeaderStyles:CSSProperties = {
    width: "100%",
    height: "1575.22px",
    margin: "0px",
}

const MainStyles:CSSProperties = {
    margin: "0px",
    width: "100%",
    height: "50vh",
    backgroundColor: "whitesmoke",
  }

const SecStyles:CSSProperties = {
    width: "100%",
    height: "50vh",
    backgroundColor: "white",
}

const AndroidStyles:CSSProperties = {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#003078",
    fontSize: "56px",
    color: "white",
}

const FooterStyles:CSSProperties = {
    width: "100%",
    height: "200px",
    backgroundColor: "whitesmoke",
    textAlign: "center"

}


export default index