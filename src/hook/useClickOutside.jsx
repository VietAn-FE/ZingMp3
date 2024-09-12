import { useEffect } from "react"

const useClickOutside = (ref, callbackState) => {

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callbackState(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        // document.addEventListener('mousedown', (e) => {
        //     handleClickOutside(ref, callbackState, e)
        // })
        return () => {
            // document.removeEventListener('mousedown', (e) => {
            //     handleClickOutside(ref, callbackState, e)
            // })
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, callbackState])

    return;
}

export default useClickOutside