import { PiecesDeckSquareProps } from "@/type";

export default function PiecesDeckSquare({ children }: PiecesDeckSquareProps) {
  return (
    <div className="flex justify-center items-center w-24 h-24 border border-black [&:not(:last-child)]:border-r-0">
      {children}
    </div>
  );
}
