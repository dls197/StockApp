import { render, fireEvent } from "@testing-library/react"
import OtherUserCommentsDisplay from "./OtherUserCommentsDisplay"

it("otherCommentsRenderCheck", () => {
    const { queryByTitle } = render(<OtherUserCommentsDisplay />)
    const comments = queryByTitle("otherComments")
    expect(comments).toBeTruthy()
})

it("leaveACommentRenderCheck", () => {
    const { queryByTitle } = render(<OtherUserCommentsDisplay />)
    const comments = queryByTitle("otherCommentsInput")
    expect(comments).toBeTruthy()
})

describe("changeInLeaveAComment", () => {
    it("onChangeLeaveAComment", () => {
        const { queryByTitle } = render(<OtherUserCommentsDisplay/>)
        const input = queryByTitle("otherCommentsInput")
        fireEvent.change(input, { target: {value: "newComment"} })
        expect(input.value).toBe("newComment")
    })
})

it("newCommentSubmitRenderCheck", () => {
    const { queryByTitle } = render(<OtherUserCommentsDisplay/>)
    const button = queryByTitle("otherCommentsSubmit")
    expect(button).toBeTruthy()
})
