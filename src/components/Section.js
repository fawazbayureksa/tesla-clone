import React from 'react'
import styled from 'styled-components'
function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>
                    Model S
                </h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    CUSTOM ORDER
                </LeftButton>
                <RightButton>
                    EXISTING INVENTORY
                </RightButton>
            </ButtonGroup>
            <DownArrow src="images/down-arrow.svg" />


        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-image : url('/images/model-s.jpg');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between; //Vertical
    align-items:center; //horizontal
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:Center;

`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    

`
const LeftButton = styled.div`
    height:40px;
    width:256px;
    background-color:#333439;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer; 
`

const RightButton = styled(LeftButton)`

    background-color:#eee;
    color:#333;
  

`
const DownArrow = styled.img`
    margin-top:20px;
    height:40px;

`