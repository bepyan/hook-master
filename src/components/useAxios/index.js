import React from 'react'
import useAxios from 'hooks/useAxios'
import { Wrapper } from 'style/atom'

export default () => {
    const { loading, err, data, refetch } = useAxios({ url: "http://aws.random.cat/meow" })

    const renderCat = () => {
        return loading ? <p>{`🐈 Loading`}</p> : <img src={data.file} alt="kit" />;
    }

    return <Wrapper>

        <p>Cat from AWS</p>
        <button onClick={refetch} >Get</button>
        <br />
        <br />
        {renderCat()}
        <p>{err}</p>
    </Wrapper>
}