import { CiGrid41 } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
import { HiMiniHome } from "react-icons/hi2";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

import React from 'react'

const Navbar = () => {
    const navTextStyle = "text-[#707070] font-['Inter'] text-[0.625rem] leading-[130%]";
    const navHomeTextStyle = "text-[#E76810] font-['Inter'] font-semibold text-[0.625rem] leading-[130%]";
    const parentDiv = "flex flex-col items-center gap-1";

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white px-0 pt-[0.75rem] pb-[0.44rem] shadow-xs">
            <div className="flex justify-evenly items-center">
                <div className={parentDiv}>
                    <CiGrid41 style={{ fontSize: "1.5rem", color: "#707070" }} />
                    <p className={navTextStyle}>Categories</p>
                </div>
                <div className={parentDiv}>
                    <TbMessage style={{ fontSize: "1.5rem", color: "#707070" }} />
                    <p className={navTextStyle}>Messages</p>
                </div>
                <div className={parentDiv}>
                    <HiMiniHome style={{ fontSize: "1.5rem", color: "#E76810" }} />
                    <p className={navHomeTextStyle}>Home</p>
                </div>
                <div className={parentDiv}>
                    <PiShoppingCartLight style={{ fontSize: "1.5rem", color: "#707070" }} />
                    <p className={navTextStyle}>Cart</p>
                </div>
                <div className={parentDiv}>
                    <FaRegUser style={{ fontSize: "1.5rem", color: "#707070" }} />
                    <p className={navTextStyle}>Account</p>
                </div>
            </div>
        </div>
    )
}


export default Navbar;
