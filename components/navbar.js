"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <nav className=" px-2 sm:px-4 py-2.5 rounded ">
        <div className=" flex items-center w-full justify-between  gap-2">
          <p className="flex justify-between px-10 bg-slate-500 text-lg font-bold py-5">
            COUNTRİES
          </p>
          <div className=" flex gap-10">
            <ul>
              <li>
                <Link
                  href="/"
                  className="flex justify-between px-10 bg-slate-500 text-lg font-bold py-5 mx-12 text-red-500"
                >
                  Home
                </Link>
              </li>
            </ul>
            <div className="flex items-center pl-5">
              {theme === "light" ? (
                <button>
                  <svg
                    onClick={() => setTheme("dark")}
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#f5eb35"
                      d="M44.1 31.02c1-17.417-7.735-26.423-10.353-30.549c14.396 3.137 30.09 10.526 30.09 31.28c0 17.689-14.339 32.03-32.03 32.03a31.797 31.797 0 0 1-16.11-4.381c8.664-4.876 27.4-10.957 28.4-28.373"
                    />
                    <g fill="#e0cf35">
                      <path d="M56.745 40.26a2.544 2.544 0 0 0 2.548 2.545a2.548 2.548 0 1 0-2.548-2.545" />
                      <circle cx="32.27" cy="57.38" r="3.486" />
                      <circle cx="47.895" cy="45.18" r="5.861" />
                      <path d="M47.667 12.575a2.07 2.07 0 1 0 4.14.001a2.07 2.07 0 0 0-4.14-.001" />
                    </g>
                  </svg>
                </button>
              ) : (
                <button>
                  <svg
                    onClick={() => setTheme("light")}
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#fbb041"
                      d="M62.713 30.827L50.77 27.352a21.201 21.201 0 0 0-2.311-5.603c1.987-3.641 3.977-7.282 5.967-10.922c.544-.996-.541-2.086-1.539-1.538l-10.878 5.974a20.853 20.853 0 0 0-5.673-2.362c-1.183-4.03-2.365-8.06-3.548-12.1c-.313-1.071-1.853-1.075-2.168 0c-1.173 4.04-2.349 8.07-3.524 12.11a21.116 21.116 0 0 0-5.576 2.316c-3.666-2-7.333-4.01-10.999-6.01c-.994-.543-2.085.543-1.537 1.541l6.03 10.978a21.063 21.063 0 0 0-2.324 5.634L.805 30.854c-1.07.314-1.076 1.856 0 2.168l11.889 3.459a21.248 21.248 0 0 0 2.389 5.729c-1.978 3.618-3.956 7.235-5.932 10.854c-.546.996.539 2.087 1.537 1.54c3.613-1.985 7.227-3.97 10.841-5.953a21.062 21.062 0 0 0 5.636 2.332c1.159 3.964 2.322 7.924 3.483 11.883c.315 1.074 1.856 1.076 2.168 0c1.151-3.955 2.305-7.911 3.454-11.867a21.115 21.115 0 0 0 5.697-2.353l10.774 5.888a.95.95 0 0 0 .739.211c.272-.016.514-.141.702-.325c.208-.192.35-.451.367-.745a.962.962 0 0 0-.218-.743c-1.966-3.583-3.937-7.169-5.904-10.754a21.294 21.294 0 0 0 2.338-5.679c3.98-1.168 7.966-2.336 11.947-3.502c1.073-.314 1.077-1.857.002-2.17"
                    />
                    <circle cx="31.553" cy="31.836" r="17.901" fill="#f9ec21" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
