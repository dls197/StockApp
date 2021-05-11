import { render } from "@testing-library/react"
import Footer from "./Footer"

it("footerRenderCheck", () => {
    const { queryByTitle } = render(<Footer />)
    const footer = queryByTitle("footer")
    expect(footer).toBeTruthy()
    expect(footer.innerHTML).toBe("<span>Need Help? Email <a href=\"mailto:marketviewhelp@gmail.com\">marketviewhelp@gmail.com</a></span>")
})

