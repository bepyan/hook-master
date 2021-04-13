import React, { useState } from 'react'
import theme from 'style/theme';
import styled from 'styled-components';
import Draggable from 'react-draggable';

export const startPos = { x: 480, y: 0 };

const Palette = () => {

    const defaultPosition = JSON.parse(window.sessionStorage.getItem('defaultPosition')) || startPos;
    window.onbeforeunload = () => {
        window.sessionStorage.setItem('defaultPosition', JSON.stringify(pos))
    }

    const [pos, setPos] = useState(defaultPosition);

    return (
        <Wrapper onDoubleClick={() => alert('move')}>
            <Draggable
                defaultPosition={defaultPosition}
                onStop={(e, data) => setPos({ x: data.x, y: data.y })}
            >
                <div>
                    <PlatteCircle />
                </div>
            </Draggable>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    cursor: none;
    margin: 2rem;
`
const PlatteCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${theme.color.font};
    transition-duration: 1s;
    transition-timing-function: ease;
    &:hover{
        box-shadow: 0 4px 8px 1px ${theme.color.font};
        transition-duration: 0.5s;
        transition-timing-function: ease;
    }
`


export default Palette;
