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

    const navOptions = [
        { icon: CiGrid41, name: "Categories", color: "#707070", textStyle: navTextStyle },
        { icon: TbMessage, name: "Messages", color: "#707070", textStyle: navTextStyle },
        { icon: HiMiniHome, name: "Home", color: "#E76810", textStyle: navHomeTextStyle },
        { icon: PiShoppingCartLight, name: "Cart", color: "#707070", textStyle: navTextStyle },
        { icon: FaRegUser, name: "Account", color: "#707070", textStyle: navTextStyle },
    ]

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white px-0 pt-[0.75rem] pb-[0.44rem] shadow-xs">
            <div className="flex justify-evenly items-center">
                {navOptions.map(nav => (
                    <div className={parentDiv}>
                        <nav.icon style={{ fontSize: "1.5rem", color: nav.color }} />
                        <p className={nav.textStyle}>{nav.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Navbar;
