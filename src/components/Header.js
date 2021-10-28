import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" Alt="Logo Tesla"/>
            </a>
            <Menu>
                <p>
                    <a href="#">Model S</a>
                </p>
                <p>
                    <a href="#">Model 3</a>
                </p>
                <p>
                    <a href="#">Model X</a>
                </p>
                <p>
                    <a href="#">Model Y</a>
                </p>
                <p>
                    <a href="#">Solar Roof</a>
                </p>
                <p>
                    <a href="#">Solar Panels</a>
                </p>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Testla Account</a>
                <a href="#"></a>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed; //Agar navbar selalu diatas
    display:flex;
    align-items:center;
    padding:0 20px;
    justify-content:space-between;
    top:0;
    left:0;
    right:0;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;
    a{
        font-weight:600;
        text-transform:uppercase; // Membuat semua huruf menjadi Kapital
        padding:0 10px;
        flex-wrap:no-wrap;

    }
`
const RightMenu =styled.div`
a{
    font-weight:600;
    text-transform:uppercase; // Membuat semua huruf menjadi Kapital
    margin-right:10px;

}
`