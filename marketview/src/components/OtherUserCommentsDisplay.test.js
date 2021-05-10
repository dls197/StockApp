import { render, fireEvent } from "@testing-library/react"
import OtherUserCommentsDisplay from "./OtherUserCommentsDisplay"

it("otherCommentsRenderCheck", () => {
    const { queryByTitle } = render(<OtherUserCommentsDisplay />)
    const comments = queryByTitle("otherComments")
    expect(comments).toBeTruthy()
})

