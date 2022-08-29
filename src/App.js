import Todo from "./components/Todo/Todo"
import Users from "./components/Users/Users"

function App() {
  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <Users />
      </div>

      <div style={sectionStyle}>
        <Todo />
      </div>
    </div>
  )
}

export default App

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
