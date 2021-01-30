import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledText } from './style';
import KaKaoLogin from 'react-kakao-login';

interface State {
    data: any;
}

class KakaoSignUp extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: 'kakao'
        }
    }

    responseKaKao = (res: any) => {
        this.setState({
            data: res
        })
        alert(JSON.stringify(this.state.data))
    }

    responseFail = (err:any) => {
        alert(err);
    }

    render() {
        return (
            <>
                <StyledText>
                    <h1>카카오톡 간편 로그인</h1>
                    <h4>로그인 후 더 많은 혜택을 누리세요!</h4>
                    {/* <StKaKaoLogin>
                        <img src={img} alt="a" onClick={this.loginWithKakao} />
                    </StKaKaoLogin> */}
                    <br />
                    <KaKaoBtn
                        jsKey={'ae4913429db06ec54d7cfc44042d3bd3'}
                        buttonText="KaKao"
                        onSuccess={this.responseKaKao}
                        onFailure={this.responseFail}
                        getProfile={true}
                    />

                </StyledText>

            </>
        );
    }
}
const StKaKaoLogin = styled.div`
    cursor: pointer;
    /* border-radius:10px; */
    /* width: 200px; */
    /* &:hover{
        box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
    } */
`;

const KaKaoBtn = styled(KaKaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`

export default KakaoSignUp;