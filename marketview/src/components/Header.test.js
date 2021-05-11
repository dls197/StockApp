import { render } from "@testing-library/react"
import Header from "./Header"

it("headerRenderCheck", () => {
    const { queryByTitle } = render(<Header />)
    const header = queryByTitle("header")
    expect(header).toBeTruthy()
})

it("logoutRenderCheck", () => {
    const { queryByTitle } = render(<Header />)
    const logout = queryByTitle("logoutButton")

    expect(logout).toBeTruthy()
    expect(logout.innerHTML).toBe("Log Out")
})

it("currentUserRenderCheck", () => {
    const { queryByTitle } = render(<Header username = "Randall"/>)
    const currentUser = queryByTitle("currentUser")
    expect(currentUser).toBeTruthy()
    expect(currentUser.innerHTML).toBe("Logged In: Randall")
})
