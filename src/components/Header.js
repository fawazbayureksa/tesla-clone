import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" Alt="Logo Tesla"/>
            </a>
            <Menu>

            </Menu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    
    // position:fixed; Agar navbar selalu diatas

`
const Menu = styled.div`

`