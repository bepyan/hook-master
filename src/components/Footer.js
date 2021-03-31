import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            © Copyright by bepyan
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position:absolute;
    width:100%;
    height:100px;
    bottom:0;
    text-align: center;
`

export default Footer
