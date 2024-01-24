import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChessBoard from "@/ui/ChessBoard";

describe("ChessBoard", () => {
  it("renders 16 squares", () => {
    render(<ChessBoard />);
    expect(screen.getAllByTestId("square").length).toBe(16);
  });

  it("renders chess board unchanged", () => {
    const { container } = render(<ChessBoard />);
    expect(container).toMatchSnapshot();
  });
});
