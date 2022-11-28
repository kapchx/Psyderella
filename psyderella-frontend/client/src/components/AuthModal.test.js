import { render, screen } from "@testing-library/react"
import AuthModal from "./AuthModal"


test("tests if email imput renders", () => {
    render(<AuthModal/>)
    const testElement = screen.getByPlaceholderText(/email/i);
    expect(testElement).toBeInTheDocument();
})

test("tests if password imput renders", () => {
    render(<AuthModal/>)
    const testElement = screen.getByPlaceholderText(/password/i);
    expect(testElement).toBeInTheDocument();
})

test("tests if password-check imput do not render when user is loged in", () => {
    render(<AuthModal isSignUp={false}/>)
    const testElement = screen.queryByPlaceholderText(/confirm password/i);
    expect(testElement).not.toBeInTheDocument();
})

test("tests if password-check imput renders when user is not loged in", () => {
    render(<AuthModal isSignUp={true}/>)
    const testElement = screen.getByPlaceholderText(/confirm password/i);
    expect(testElement).toBeInTheDocument();
})