import { render, screen } from "@testing-library/react"
import MatchesDisplay from "./MatchesDisplay"


test("renders test rect element", () => {
    render(<MatchesDisplay/>)
    const testElement = screen.getByText(/matches display/i);
    expect(testElement).toBeInTheDocument();
})