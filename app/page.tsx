import Logo from "@/ui/Logo";
import ChessBoard from "@/ui/ChessBoard";
import PiecesDeck from "@/ui/PiecesDeck";

export default function Home() {
  return (
    <>
      <Logo />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <PiecesDeck position="top" playerColor="black" />
        <ChessBoard />
        <PiecesDeck position="bottom" playerColor="white" />
      </main>
    </>
  );
}
