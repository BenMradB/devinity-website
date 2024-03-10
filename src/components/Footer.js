import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Logo } from "../images/logo.svg";

// <div className="max-h-full flex flex-col gap-4 bg-red-500">
//   {/* Top area: Blocks */}
//   <div className="flex justify-between items-center w-10/12  mx-auto">
//     <h3 className="font-bold text-4xl ">
//       <Logo className="w-[35pw] h-[35px] md:w-[80pw] md:h-[80px]" />
//     </h3>

//     <div className="text-blue-900 font-bold">
//       <div className="text-xl mb-6">Social Media Links.</div>

//       <div className="text-md font-medium mb-6">
//         Follow us on social media.
//       </div>
//       <div className="mx-auto text-center mt-2">

//       </div>
//     </div>
//   </div>

// </div>
const Footer = () => {
  return (
    <div className="footer shadow-lg shadow-black min-h-36 w-full  flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between p-8">
        <HashLink smooth to="/#">
          <h3 className="font-bold text-4xl ">
            <Logo className="w-[60pw] h-[60px] md:w-[80pw] md:h-[80px]" />
          </h3>
        </HashLink>
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="text-xl font-bold text-blue-900 hidden md:block">
            Follow us on
          </span>
          <ul className="flex items-center gap-2">
            <li>
              <Link
                to="#"
                className="flex justify-center items-center text-blue-900 bg-white rounded-full hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out shadow"
                aria-label="Twitter"
              >
                <svg
                  className="w-12 h-12 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="#"
                className="flex justify-center items-center text-blue-900 bg-white rounded-full hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out shadow"
                aria-label="Facebook"
              >
                <svg
                  className="w-12 h-12 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex justify-center items-center text-blue-900 bg-white rounded-full hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out shadow"
                aria-label="Twitter"
              >
                <svg
                  className="w-12 h-12 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="#"
                className="flex justify-center items-center text-blue-900 bg-white rounded-full hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out shadow"
                aria-label="Facebook"
              >
                <svg
                  className="w-12 h-12 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-black">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center ">
          <div className="text-[14px] md:text-base font-semibold ">
            Copyright &copy; {new Date().getFullYear()}
            {"  "}
            <HashLink
              to="#"
              className="text-slate-500 font-bold text-md md:text-lg hover:text-blue-900"
            >
              <span className="">Devinity</span>
              <span className="text-lg md:text-xl">IT</span>
            </HashLink>
            . All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
