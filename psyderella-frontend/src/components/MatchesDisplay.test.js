import { render, screen } from "@testing-library/react"
import MatchesDisplay from "./MatchesDisplay"


test("tests if matches element is rendered", () => {
    render(<MatchesDisplay/>)
    const testElement = screen.getByText(/matches display/i);
    expect(testElement).toBeInTheDocument();
})