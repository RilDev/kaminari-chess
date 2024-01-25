import { PiecesDeckProps } from "@/type";
import clsx from "clsx";
import Piece from "@/ui/Piece";
import PiecesDeckSquare from "@/ui/PiecesDeckSquare";

export default function PiecesDeck({ position, playerColor }: PiecesDeckProps) {
  return (
    <div
      className={clsx("flex", {
        "mb-12": position === "top",
        "mt-12": position === "bottom",
      })}
    >
      <PiecesDeckSquare>
        <Piece type="king" color={playerColor} />
      </PiecesDeckSquare>
      <PiecesDeckSquare>
        <Piece type="bishop" color={playerColor} />
      </PiecesDeckSquare>
      <PiecesDeckSquare>
        <Piece type="knight" color={playerColor} />
      </PiecesDeckSquare>
      <PiecesDeckSquare>
        <Piece type="rook" color={playerColor} />
      </PiecesDeckSquare>
    </div>
  );
}
