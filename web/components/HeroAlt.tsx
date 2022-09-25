import React from "react";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function HeroAlt({}: Props) {
  return (
    <div className="relative snap-center h-screen flex flex-col space-y-8 items-center justify-center">
      <h1 className="absolute">The Name is Hanne Edfelt</h1>
      <BackgroundCircles />
    </div>
  );
}
