import { cleanup, render, screen, waitFor } from "@testing-library/react"
import mockedAxios from "axios"
import Users from "../../components/Users/Users"

afterEach(cleanup)

test("Mock axios", async () => {
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
  await mockedAxios.get.mockResolvedValue({ data: mockUsers })
  const url = "https://jsonplaceholder.typicode.com/users"

  render(<Users />)

  expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  expect(mockedAxios.get).toHaveBeenCalledWith(url)

  // fix act warning
  await waitFor(async () => screen.findByTestId("actual-users"))
})
