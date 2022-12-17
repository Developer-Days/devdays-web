import React, {
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react"

const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect

function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback)

    // Remember the latest callback if it changes.
    useIsomorphicLayoutEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        // Note: 0 is a valid value for delay.
        if (!delay && delay !== 0) {
            return
        }

        const id = setInterval(() => savedCallback.current(), delay)

        return () => clearInterval(id)
    }, [delay])
}

const Welcome = () => {
    const [displayText, setDisplayText] = useState("gear")
    const [visible, setVisible] = useState(true)

    useInterval(() => {
        console.count(displayText)
        // if (text.current == "gear") text.current = "up"
        // else if (text.current == "up") text.current = "for"
        // else if (text.current == "for") text.current = "2.0"
        // else return
        if (displayText == "gear") setDisplayText("up")
        else if (displayText == "up") setDisplayText("for")
        else if (displayText == "for") setDisplayText("2.0")
        else
            setTimeout(() => {
                setVisible(false)
            }, 1000)
    }, 1000)

    return (
        <div
            className={`fixed ${
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            } bg-red-500 top-0 left-0 w-screen flex transition-all flex-col justify-center items-center h-screen z-[1000]`}
        >
            <div className="flex text-white text-4xl font-bold">
                {displayText}
            </div>
        </div>
    )
}

export default Welcome
