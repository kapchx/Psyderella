import { render, screen } from "@testing-library/react"
import ChatContainer from "./ChatContainer"


test("tests if matches button is rendered", () => {
    render(<ChatContainer/>)
    const testElement = screen.getByText("Matches");
    expect(testElement).toBeInTheDocument();
})

test("tests if chat button is rendered", () => {
    render(<ChatContainer/>)
    const testElement = screen.queryAllByText("Chat");
    expect(testElement).not.toBeNull();
})