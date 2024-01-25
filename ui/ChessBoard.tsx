import { chessBoardLayout } from "@/data";
import clsx from "clsx";

export default function ChessBoard() {
  return (
    <div className="border border-black">
      {chessBoardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.map((square, squareIndex) => (
            <div
              key={squareIndex}
              className={clsx("w-24 h-24", {
                "bg-white": square === "white",
                "bg-black": square === "black",
              })}
              data-testid="square"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
