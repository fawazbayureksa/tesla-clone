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
                <a href="#">Account</a>
                <a href="#" >Menu</a>
            </RightMenu>
            <BurgerNav>
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade-In</a></li>
                <li><a href="">Test Drive</a></li>
                <li><a href="">Cybertruck</a></li>
                <li><a href="">Roadster</a></li>
                <li><a href="">Semi</a></li>
                <li><a href="">Charging</a></li>
                <li><a href="">Powerwall</a></li>
                <li><a href="">Commercial Energy</a></li>
                <li><a href="">Utilities</a></li>
                <li><a href="">Find Us</a></li>
                <li><a href="">Support</a></li>
                <li><a href="">Investor Relations</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    z-index:1;
    min-height:60px;
    position:fixed; //Agar navbar selalu diatas
    display:flex;
    align-items:center;
    padding:0 20px;
    justify-content:space-between;
    top:0;
    left:0;
    right:0;
    a{
        font-size:14px;
    }
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
    @media(max-width:768px){
        display:none;

    }
`
const RightMenu =styled.div`
    display:flex;
    align-items:center;
a{

    font-weight:600;
    text-transform:uppercase; // Membuat semua huruf menjadi Kapital
    margin-right:10px;

}
`
const BurgerNav = styled.div`
    // display:none;
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:#ffffff;
    li{
    }
    width:295px;
    z-index:16;
`