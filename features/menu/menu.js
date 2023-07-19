"use client";
import { React, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession, getSession } from "next-auth/react";

const Menu = (props) => {
  const [navbar, setNavbar] = useState(false);
  const { data: session } = useSession();

  const pathname = usePathname();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <nav className="w-full flex justify-end font-roboto lg:text-2xl sm:text-1xl ">
      <div className="w-full justify-center px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-end py-3 md:py-5 md:block ">
            <div className="md:hidden ">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={` w'full flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0">
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0">
                {props.menuOptions.map((elem) => {
                  const isActive =
                    elem.link === pathname ||
                    pathname === elem.link ||
                    pathname.startsWith(elem.link + "/");

                  if (elem.link === "/admin-content-settings") {
                    if (
                      session &&
                      session.user.email === "bojanagolubovic.makeup@gmail.com"
                    )
                      return (
                        <li
                          className={`text-white ${
                            isActive ? "text-yellow" : ""
                          }`}
                          key={elem.title}
                        >
                          <Link href={elem.link}>{elem.title}</Link>
                        </li>
                      );
                  } else
                    return (
                      <li
                        className={`text-white ${
                          isActive ? "text-yellow" : ""
                        }`}
                        key={elem.title}
                      >
                        <Link href={elem.link}>{elem.title}</Link>
                      </li>
                    );
                })}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
