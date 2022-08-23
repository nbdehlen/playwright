import { render, screen } from "@testing-library/react"
import App from "../../App"

test("Render static text", () => {
  render(<App />)
  const linkElement = screen.getByText(/Users:/i)
  expect(linkElement).toBeInTheDocument()
})

// TODO:
// Setup testing w react-testing-library, jest, enzyme
