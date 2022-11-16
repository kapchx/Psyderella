import { render, screen } from "@testing-library/react"
import App from "./App"


test("renders test rect element", () => {
    render(<App/>)
    const testElement = screen.getByText(/test react/i);
    expect(testElement).toBeInTheDocument();
})