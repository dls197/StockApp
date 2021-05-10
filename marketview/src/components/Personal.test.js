import { render, fireEvent } from "@testing-library/react"
import Personal from "./Personal"


it("changeFullNameRenderCheck", () => {
    const { queryByTitle } = render(<Personal username = "username"/>)
    const input = queryByTitle("changeFullName")
    expect(input).toBeTruthy()
})

describe("changeInChangeFullName", () => {
    it("onChangeFullName", () => {
        const { queryByTitle } = render(<Personal username = "username"/>)
        const input = queryByTitle("changeFullName")
        fireEvent.change(input, { target: {value: "newFullName"} })
        expect(input.value).toBe("newFullName")
    })
})

it("changeBioRenderCheck", () => {
    const { queryByTitle } = render(<Personal username = "username"/>)
    const input = queryByTitle("changeBio")
    expect(input).toBeTruthy()
})

describe("changeInChangeBio", () => {
    it("onChangeBio", () => {
        const { queryByTitle } = render(<Personal username = "username"/>)
        const input = queryByTitle("changeBio")
        fireEvent.change(input, { target: {value: "newBio"} })
        expect(input.value).toBe("newBio")
    })
})

it("nameSubmitRenderCheck", () => {
    const { queryByTitle } = render(<Personal username = "username"/>)
    const button = queryByTitle("nameSubmit")
    expect(button).toBeTruthy()
})

describe("nameSubmitActuallyChangesName", () => {
    it("onSubmitName", () => {
        const { queryByTitle } = render(<Personal username = "username"/>)
        const button = queryByTitle("nameSubmit")
        const input = queryByTitle("changeFullName")
        const newFullName = queryByTitle("newFullName")

        fireEvent.change(input, { target: {value: "Randall John"} })
        fireEvent.click(button)
        expect(newFullName.innerHTML).toBe("Your Full Name: Randall John")
    })
})

it("bioSubmitRenderCheck", () => {
    const { queryByTitle } = render(<Personal username = "username"/>)
    const button = queryByTitle("bioSubmit")
    expect(button).toBeTruthy()
})

describe("bioSubmitActuallyChangesBio", () => {
    it("onSubmitBio", () => {
        const { queryByTitle } = render(<Personal username = "username"/>)
        const button = queryByTitle("bioSubmit")
        const input = queryByTitle("changeBio")
        const newBio = queryByTitle("newBio")

        fireEvent.change(input, { target: {value: "I like to play tennis"} })
        fireEvent.click(button)
        expect(newBio.innerHTML).toBe("Your Bio: I like to play tennis")
    })
})
