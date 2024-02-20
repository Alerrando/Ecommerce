// @flow
import * as React from "react";
import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full h-auto relative border-b border-b-zinc-300">
      <div className="flex items-center justify-between py-[11px] md:py-[14px] px-6">
        <Link to="/">
            <ArrowLeft size={32} />
        </Link>

        <h1 className="text-4xl font-Playfair-Display text-[#474747] font-semibold">
          TechSoft
        </h1>

        <div></div>
      </div>
    </header>
  );
}
