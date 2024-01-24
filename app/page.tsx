import Logo from "@/ui/Logo";
import ChessBoard from "@/ui/ChessBoard";

export default function Home() {
  return (
    <>
      <Logo />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <ChessBoard />
      </main>
    </>
  );
}
