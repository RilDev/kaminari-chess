"use client";

import { PieceProps } from "@/type/piece-props";
import NextImage from "next/image";

export default function Piece({ type, color }: PieceProps) {
  return (
    <NextImage
      src={`/${type}-${color}.svg`}
      height="96"
      width={96}
      alt="King White"
      priority={true}
      onDragStart={(event) => {
        const image = new Image();
        image.src = `/${type}-gray.svg`;
        event.dataTransfer.setDragImage(image, 48, 48);
      }}
    />
  );
}
