import dynamic from "next/dynamic"
import React from "react"

const Dynamic = (props: React.PropsWithChildren) => (
  <React.Fragment>{props.children}</React.Fragment>
)
export default dynamic(() => Promise.resolve(Dynamic), {
  ssr: false,
})
