import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="flex border-t-2 flex-wrap border-[#FB635D] w-[80%] m-auto justify-between items-center py-6">
            <img className="w-[200px]" src="/footer.png" alt="" />

            <ul>
                <li className="font-bold underline ">Important Links</li>
                <Link to="/">
                    <li className="hover:text-[#FB635D] cursor-pointer font-semibold ">
                        Home
                    </li>
                </Link>
                <a href="/#about">
                    <li className="hover:text-[#FB635D] cursor-pointer font-semibold ">
                        About
                    </li>
                </a>
                <Link to="/upload">
                    <li className="hover:text-[#FB635D] cursor-pointer font-semibold ">
                        Sell
                    </li>
                </Link>
                <Link to="/books">
                    <li className="hover:text-[#FB635D] cursor-pointer font-semibold ">
                        Buy
                    </li>
                </Link>
            </ul>
            <div className="flex flex-col">
                <h1>
                    Made by{" "}
                    <span className="text-[#FB635D] font-bold">
                        {" "}
                        Akshar Saxena
                    </span>
                </h1>
                <h2>
                    <span className="font-bold">Email :</span>{" "}
                    aksharsaxena2003@gmail.com
                </h2>
                <div className="flex w-[100px] justify-between items-center">
                    <a href="">
                        <img className="w-[40px]" src="/linkedin.png" alt="" />
                    </a>
                    <a href="">
                        <img className="w-[40px]" src="/github.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}
