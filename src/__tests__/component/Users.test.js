import { cleanup, render, screen } from "@testing-library/react"
import mockedAxios from "axios"
import { BrowserRouter } from "react-router-dom"
import Users from "../../components/Users/Users"

afterEach(cleanup)

test("Users", async () => {
  /* Arrange */
  const mockUsers = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
    },
  ]

  /* Act */
  await mockedAxios.get.mockResolvedValue({ data: mockUsers })

  render(<Users />, { wrapper: BrowserRouter })

  /* Assert */
  const loadingText = await screen.findByTestId("loading-users")
  // TODO: Test for something more stable than "Loading..."
  expect(loadingText.textContent).toBe("Loading...")

  const actualUsers = await screen.findByTestId("actual-users")
  expect(actualUsers.childElementCount).toBe(2)

  // check that loading doesn't exist anymore
  expect(loadingText).not.toBeInTheDocument()
})
