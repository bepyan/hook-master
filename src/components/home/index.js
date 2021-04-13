import React from 'react'
import { Wrapper } from 'style/atom'
import { startPos } from 'components/Palette';

export default () => {

    const resetPalette = () => {
        window.location.reload();
        window.sessionStorage.setItem('defaultPosition', JSON.stringify(startPos));
    }

    return (
        <Wrapper>
            <p>let's leran about React Hook!</p>
            <button onClick={resetPalette}>Reset Palette</button>
            <br />
            <br />
            <h4>Reference From</h4>
            <p>https://www.notion.so/bepyan/React-23d6888fe0d140f392b35b73946405e3</p>
            <p>https://nomadcoders.co/react-hooks-introduction/lobby</p>
            <p>https://2colors.colorion.co/</p>

        </Wrapper>
    )
}