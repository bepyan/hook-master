import React, { useState } from 'react'
import theme from 'style/theme';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import useModal from 'hooks/useModal';
import { breatheAnimation } from 'style/animations';

export const startPos = { x: 480, y: 0 };

const Palette = () => {

    const defaultPosition = JSON.parse(window.sessionStorage.getItem('defaultPosition')) || startPos;
    window.onbeforeunload = () => {
        window.sessionStorage.setItem('defaultPosition', JSON.stringify(pos))
    }

    const [Modal, toggle] = useModal();
    const [pos, setPos] = useState(defaultPosition);

    return <Wrapper >
        <Draggable
            defaultPosition={defaultPosition}
            onStop={(e, data) => setPos({ x: data.x, y: data.y })}
        >
            <MoveWrapper onDoubleClick={toggle}>
                <PlatteCircle />
            </MoveWrapper>
        </Draggable>
        <Modal>
            <div>
                asdfasdf
            </div>
        </Modal>
    </Wrapper>
}

const Wrapper = styled.div`
    position: absolute;
    margin: 2rem;
`
const MoveWrapper = styled.div`
    cursor: none;
    transition-duration: 0.15s;
    transition-timing-function: ease;
`
const PlatteCircle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${theme.color.font};

    transition: box-shadow 2s ease;
    &:hover{
        box-shadow: 0 4px 8px 1px ${theme.color.font};
        transition: box-shadow 0.5s ease;
        animation: ${breatheAnimation};
    }

`

export default Palette;