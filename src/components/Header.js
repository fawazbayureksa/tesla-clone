import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
function Header() {
    const [burgerStatus,setBurgerStatus] = useState(false);
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
                <a href="#" onClick={()=>setBurgerStatus(true)} >Menu</a>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
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
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:#ffffff;
    margin-left:50px;
    li{
        list-style:none; //Menghilangkan garis datar pada <list>
        padding:15px 0;
    }
    width:295px;
    z-index:16;
    font-size:18px;
    font-weight:600;
    color:#95979a;
    display:flex;
    flex-direction:column;
    text-align:start;
    justify-content:space-between;
    padding:20px;
    transition:transform 0.3s ease-in;
    overflow-y:scroll;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'} //Jika menu tidak di tekan maka Nav nya tidak mucul
    `

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`
const CloseWrapper = styled.div`
    display:flex;
    Justify-Content: flex-end;
`