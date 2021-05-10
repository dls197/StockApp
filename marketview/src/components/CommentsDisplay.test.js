import { render } from "@testing-library/react"
import CommentsDisplay from "./CommentsDisplay"

it("commentsRenderCheck", () => {
    const { queryByTitle } = render(<CommentsDisplay username = "username"/>)
    const comments = queryByTitle("comments")
    expect(comments).toBeTruthy()
})

