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
`
const Menu = styled.div`
    display:flex;
    align-items:center;

    p{
        font-weight:600;
        text-transform:uppercase; // Membuat semua huruf menjadi Kapital
    }
`