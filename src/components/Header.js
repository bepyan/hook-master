import React from 'react'
import styled from 'styled-components'

const Header = ({ hookList }) => {
    const onLogo = () => window.location.href = '/'

    return (
        <Wrapper>
            <Title onClick={onLogo}>
                Hook Master
            </Title>
            <br/>

            {
                hookList.map(item => 
                    <a href={`/${item}`} key={item} style={{margin: '0.5rem'}}> 
                        {item} 
                    </a>)
            }
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    text-align: center;
    margin: 2rem 0 2rem 0;
`
const Title = styled.h1`
    display: inline;
    cursor: pointer;
    font-size: 60px;
    margin-bottom: 0.5rem;
    font-family: 'Do Hyeon', sans-serif;
`

export default Header;
