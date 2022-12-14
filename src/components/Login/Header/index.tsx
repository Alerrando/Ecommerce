// @flow
import * as React from "react";
import { ArrowLeft } from 'phosphor-react';

export function Header() {
  return (
    <header className="w-full h-auto">
      <div className="flex items-center justify-between py-2 px-6">
        <ArrowLeft size={32} />

        <h1 className="text-4xl font-Playfair-Display text-[#474747] font-semibold">
          TechSoft
        </h1>

        <div></div>
      </div>
    </header>
  );
}
