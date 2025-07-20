import { MenuSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6edf4] px-10 py-3 bg-slate-50">
      <div className="flex items-center gap-8">
        <Link href={"/"} className="flex items-center gap-4 text-[#0c151d]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[#0c151d] text-lg font-bold leading-tight tracking-[-0.015em]">
            News Today
          </h2>
        </Link>
        <nav className="flex items-center gap-9">
          {["Home", "Populer"].map((text) => (
            <a
              key={text}
              href={text === "Home" ? "/" : `/${text}`}
              className="text-[#0c151d] text-sm font-medium leading-normal"
            >
              {text}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e6edf4] text-[#0c151d] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
          <MenuSquare />
        </button>

        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0IbQpC8C95OICM9Uw-5ZSc3YRKH-GyYjSlBtV2Kv5yXl0N7GNf256WGumW_0yNpGXF-LLBbN3GFsL6dcAFmtXYEFJPEfvmHcVafhcL-v7a8XRucOGQHvo1nSMksGyDjzVM27ywIaLVX35b9Ds59S_bnKJxGkfszjSvZyasxxtKUvLcwdvYGMR65wBBmcZfTkF-FGHpLBaQxW3IcsFMtyTfl2AYYun3uReKHKnIJXAwXT8b1e_BcQv9v6SVnrdafGUUYIQ5l6zxpeu')",
          }}
        />
      </div>
    </header>
  );
}
