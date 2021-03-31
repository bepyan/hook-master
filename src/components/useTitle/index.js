import useTitle from 'hooks/useTitle'
import React, { useEffect, useState } from 'react'
import { Wrapper } from 'style/atom';

export default () => {
    const [title, setTtitle] = useState("loading");
    const titleUpdater = useTitle(title);

    useEffect(() => {
        titleUpdater(title)
    }, [title])
    

    return (
        <Wrapper>
            <p>Check out the title of this website</p>
            <button onClick={() => titleUpdater("done")}> change title </button>
            <p>{title}</p>
        </Wrapper>
    )
}
