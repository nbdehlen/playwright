import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import App from "../../App"

afterEach(cleanup)

test("It renders landing route", () => {
  /* Act */
  render(<App />)

  /* Assert */
  const homeText = screen.getByTestId("home") // Temp component
  expect(homeText).not.toBe(undefined)
})

test("It renders Users route", async () => {
  /* Act */
  render(<App />)
  const usersLink = screen.getByTestId("users-link")
  fireEvent.click(usersLink)

  /* Assert */
  const title = await screen.findByText(/Users:/i)
  expect(title).toBeInTheDocument()
})
