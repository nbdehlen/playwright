import { cleanup, render, screen, waitFor } from "@testing-library/react"
import mockedAxios from "axios"
import { BrowserRouter } from "react-router-dom"
import Users from "../../components/Users/Users"

afterEach(cleanup)

test("Mock axios", async () => {
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

  // Users makes the API call on page load
  render(<Users />, { wrapper: BrowserRouter })

  // fix act warning (and wait for users).
  await waitFor(() => screen.findByTestId("actual-users"))

  /* Assert */
  expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  const url = "https://jsonplaceholder.typicode.com/users"
  expect(mockedAxios.get).toHaveBeenCalledWith(url)
})
