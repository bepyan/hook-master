import useTitle from 'hooks/useTitle'
import React from 'react'

export default () => {
    const titleUpdater = useTitle("loading");

    return (
        <div style={{ textAlign: "center" }}>
            <p>Check out the title of this website</p>
            <button onClick={() => titleUpdater("done")}> change title </button>
        </div>
    )
}
