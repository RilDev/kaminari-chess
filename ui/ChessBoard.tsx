import { chessBoardLayout } from "@/data";

export default function ChessBoard() {
  return (
    <div className="border border-black">
      {chessBoardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.map((square, squareIndex) => (
            <div
              key={squareIndex}
              className={`w-24 h-24 ${
                square === "white" ? "bg-white" : "bg-black"
              }`}
              data-testid="square"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
