import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-slate-50">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-row sm:justify-around">
            {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map(
              (text) => (
                <a
                  key={text}
                  className="text-[#4574a1] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  {text}
                </a>
              )
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Facebook color="#3b5998" />
            <Twitter color="#1da1f2" />
            <Instagram color="#e4405f" />
          </div>
          <div className="text-[#4574a1] text-base font-normal leading-normal">
            @2024 Tech Today. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
