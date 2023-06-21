import React from "react";
import Link from "next/link";

function Navbar(){
    return(
        <ul>
            <li>
                <Link href="/home">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/suggest">
                    Suggest
                </Link>
            </li>
            <li>
                <Link href="/addin">
                    Add Inventory
                </Link>
            </li>
            <li>
                <Link href="/prevsug">
                    Previous Suggest
                </Link>
            </li>
            <li>
                <Link href="/inventory">
                    Inventory
                </Link>
            </li>
        </ul>
    )
}

export default Navbar;