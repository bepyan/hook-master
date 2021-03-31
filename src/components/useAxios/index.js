import React from 'react'
import useAxios from 'hooks/useAxios'

export default () => {
    const { loading, err, data, refetch } = useAxios({ url: "http://aws.random.cat/meow" })

    return <div style={{ textAlign: "center" }}>
        <p>Cat from AWS</p>
        <button onClick={refetch} >Get</button>
        <br/>
        <br/>
        {loading ? <h4>{`🐈 Loading`}</h4> : <img src={data.file} alt="kit"/>}
        <p>{err}</p>
    </div>
}