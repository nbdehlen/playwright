import { render, screen } from "@testing-library/react"
import App from "../../App"

test("snabelA", () => {
  render(<App />)
  const linkElement = screen.getByText(/Users:/i)
  expect(linkElement).toBeInTheDocument()
})

// TODO:
// Setup testing w react-testing-library, jest, enzyme
