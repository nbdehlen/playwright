import { useEffect, useState } from "react"

const WindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const listener = () => setWindowWidth(window.innerWidth)
    // setTimeout(() => {
    window.addEventListener("resize", listener)
    // }, 4000)

    return () => window.removeEventListener("resize", listener)
  }, [])

  return <p>Window is {windowWidth > 600 ? "wide" : "narrow"}</p>
}

export default WindowWidth
