import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "@/ui/Logo";

describe("Logo", () => {
  it("renders title", () => {
    render(<Logo />);
    expect(screen.getByText(/Kaminari Chess/i)).toBeInTheDocument();
  });
});
