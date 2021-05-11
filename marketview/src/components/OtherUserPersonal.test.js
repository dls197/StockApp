import { render } from "@testing-library/react"
import OtherUserPersonal from "./OtherUserPersonal"

it("otherUserBioRenderCheck", () => {
    const { queryByTitle } = render(<OtherUserPersonal/>)
    const bio = queryByTitle("otherUserBio")
    expect(bio).toBeTruthy()
})