import useTitle from 'hooks/useTitle'
import React, { useEffect, useState } from 'react'
import { Wrapper } from 'style/atom';

export default () => {
    const titleToggle = ["💊loading", "✨done"]
    const [title, setTtitle] = useState(titleToggle[0]);
    const titleUpdater = useTitle(title);

    useEffect(() => {
        titleUpdater(title)
    }, [title])
    

    return (
        <Wrapper>
            <p>Check out the title of this website</p>
            <button onClick={() => setTtitle(title === titleToggle[0] ? titleToggle[1] : titleToggle[0])}> change title </button>
            <p>{title}</p>
        </Wrapper>
    )
}
