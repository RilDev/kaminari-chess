"use client";

import Logo from "@/ui/Logo";
import ChessBoard from "@/ui/ChessBoard";
import KingWhiteSVG from "@/public/king-white.svg";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const kingWhiteRef = useRef<HTMLImageElement | null>();
  return (
    <>
      <Logo />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex mb-12">
          <div className="flex justify-center items-center w-24 h-24 border border-black [&:not(:last-child)]:border-r-0">
            <div className="text-8xl -top-2 relative">♚</div>
          </div>
          <div className="flex justify-center items-center w-24 h-24 border border-black [&:not(:last-child)]:border-r-0">
            <div className="text-8xl -top-2 relative">♝</div>
          </div>
          <div className="flex justify-center items-center w-24 h-24 border border-black [&:not(:last-child)]:border-r-0">
            <div className="text-8xl -top-2 relative">♞</div>
          </div>
          <div className="flex justify-center items-center w-24 h-24 border border-black [&:not(:last-child)]:border-r-0">
            <div className="text-8xl -top-2 relative">♜</div>
          </div>
        </div>
        <ChessBoard />
        <div className="flex mt-12">
          <div className="flex justify-center items-center w-24 h-24 border border-black [&:not(:last-child)]:border-r-0">
            {/* <div draggable={true}>
              <KingWhiteSVG />
            </div> */}
            <Image
              ref={(event) => (kingWhiteRef.current = event)}
              src="/king-white.svg"
              height="96"
              width={96}
              alt="King White"
            />
          </div>
          <div className="flex justify-center items-center w-24 h-24 border border-black [&:not(:last-child)]:border-r-0">
            <div className="text-8xl -top-2 relative">♗</div>
          </div>
          <div className="flex justify-center items-center w-24 h-24 border border-black [&:not(:last-child)]:border-r-0">
            <div className="text-8xl -top-2 relative">♘</div>
          </div>
          <div className="flex justify-center items-center w-24 h-24 border border-black [&:not(:last-child)]:border-r-0">
            <div className="text-8xl -top-2 relative">♖</div>
          </div>
        </div>
      </main>
    </>
  );
}
