import { render, fireEvent } from "@testing-library/react"
import Stocks from "./Stocks"


it("tickerSearchRenderCheck", () => {
    const { queryByTitle } = render(<Stocks />)
    const input = queryByTitle("tickerSearch")
    expect(input).toBeTruthy()
})

describe("changeInTickerSearch", () => {
    it("onChangeTicker", () => {
        const { queryByTitle } = render(<Stocks />)
        const input = queryByTitle("tickerSearch")
        fireEvent.change(input, { target: {value: "testTicker"} })
        expect(input.value).toBe("testTicker")
    })
})