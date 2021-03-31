import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (opts, baseAxios = axios) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");
    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setLoading(true);
        setTrigger(new Date().getTime());
    }

    const fetch = async () => {
        try {
            const { data } = await baseAxios(opts)
            setData(data);
        } catch (error) {
            setErr(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetch();
    }, [trigger]);

    return { data, loading, err, refetch };
}

export default useAxios;