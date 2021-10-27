import React from 'react'
import styled from 'styled-components'
function Section({title,description,leftBtnText,RightBtnText,backgroundImg}) {
    console.log(backgroundImg)
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>
                    {title}
                </h1>
                <p>{description}</p>
            </ItemText>

            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    <RightButton>
                        {RightBtnText}
                    </RightButton>
                </ButtonGroup>
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>


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
    background-image : ${props => 'url("/images/${props.bgImage}")' }; 
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:Center;

`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
        flex-direction:column;
    }
    

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
    margin:8px;
`

const RightButton = styled(LeftButton)`

    background-color:#eee;
    color:#333;

`
const DownArrow = styled.img`
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s;
`
const Buttons = styled.div`

`