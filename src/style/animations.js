import { css, keyframes } from 'styled-components'

const slideUpLarge = keyframes`
    0% { transform: translateY(0%); }
    100% { transform: translateY(-100%); }
`
export const slideUpLargeAnimation = css`
    animation: ${slideUpLarge} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
`

const slideDownLarge = keyframes`
    0% { transform: translateY(-100%); }
    100% { transform: translateY(0%); }
`
export const slideDownLargeAnimation = css`
    animation: ${slideDownLarge} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
`

const moveUp = keyframes`
    0% { transform: translateY(150px); }
    100% { transform: translateY(0); }
`
export const moveUpLargeAnimation = css`
    animation: ${moveUp} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
`

const moveDown = keyframes`
    0% { transform: translateY(0px); }
    100% { transform: translateY(150px); }
`
export const moveDownAnimation = css`
    animation: ${moveDown} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
`

const breathe = keyframes`
    0% { transform: scale(0.9); }
    25% { transform: scale(1.2); }
    60% { transform: scale(1.0); }
    100% { transform: scale(0.9); }
`
export const breatheAnimation = css`
    animation: ${breathe} 4s ease-out infinite normal;
`