import React from "react"
import { BreadcrumbTrail, routes } from "../../routing/AppRouter"
import Nav from "../Nav/Nav"

const Layout = ({ children }) => {
  return (
    <div style={containerStyle}>
      <Nav />
      <BreadcrumbTrail routes={routes} />
      <div style={sectionStyle}>{children}</div>
    </div>
  )
}

export default Layout

const sectionStyle = {
  minWidth: 360,
  backgroundColor: "#555",
  color: "#fafafa",
  padding: 16,
  borderStyle: "solid",
  borderWidth: 2,
  borderRadius: 16,
  borderColor: "rgba(180,180,180,0.8)",
  margin: 16,
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#555",
}
