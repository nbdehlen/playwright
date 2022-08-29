import { cleanup, render, screen, waitFor } from "@testing-library/react"
import mockedAxios from "axios"
import Users from "../../components/Users/Users"

afterEach(cleanup)

test("Users", async () => {
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

  render(<Users />)

  const loadingText = await screen.findByTestId("loading-users")

  expect(loadingText.textContent).toBe("Loading...")

  await waitFor(async () => screen.findByTestId("actual-users"))
  const actualUsers = await screen.findByTestId("actual-users")

  // console.log(actualUsers.firstChild.textContent, "BABA")
  expect(actualUsers.childElementCount).toBe(2)

  // check that loading doesnt exist anymore
  expect(loadingText).not.toBeInTheDocument()
})
