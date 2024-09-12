// import { useEffect, useState } from "react"

import { useEffect, useState } from "react";



const useSessionStorage = (key, defaultValue = null) => {
    const getDefaultState = () => {
        if (!Storage || !key || !key.length) {
            return defaultValue
        }

        const value = sessionStorage.getItem(key);
        try {
            return JSON.parse(value) || defaultValue
        } catch (error) {
            
        }
        return defaultValue
    }

    const [stateSesstion, setStateSession] = useState(getDefaultState());

    useEffect(() => {
        if (!Storage || !key || !key.length) {
            return () => { }
        }
        sessionStorage.setItem(key, JSON.stringify(stateSesstion));
    }, [stateSesstion])


    return {
        stateSesstion,
        setStateSession
    }
}


export default useSessionStorage