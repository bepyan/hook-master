import React, { useState } from 'react';
import { moveUpLargeAnimation, slideDownLargeAnimation, slideUpLargeAnimation } from 'style/animations';
import styled from 'styled-components';

const useModal = () => {
    const [showModal, setShowModal] = useState(false);

    const toggle = () => setShowModal(!showModal);

    const Modal = ({ children }) => {
        return !showModal ? null :
            <ModalWrapper active>
                <ModalOverlay onClick={toggle} />
                <ModalContent>
                    {children}
                </ModalContent>
            </ModalWrapper>
    }

    return [Modal, toggle];
}

export default useModal;

const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    ${(props) => props.active && moveUpLargeAnimation}
`
const ModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`
const ModalContent = styled.div`
    position: relative;
    width: 300px;
    padding: 30px 50px 20px 50px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18), 0, 6px 6px rgba(0, 0, 0, 0.2);
`