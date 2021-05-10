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