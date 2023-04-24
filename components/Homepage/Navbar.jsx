import Image from "next/image"
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { ArrowUp, EmptyBasket, FullBasket } from "../global/Icons";

const CartButton = () => {
    return (
        <>
            <button className="rounded-3xl text-slate-600 border relative">
                <FullBasket fontSize={35} className="p-1 bg-purple-50 rounded-full active:bg-purple-100 active:text-slate-700 border border-purple-100" />
                <span className="absolute -top-2 -right-1 w-4 h-4 bg-purple-600 flex items-center justify-center rounded-full text-white text-sm overflow-hidden">
                    <small>5</small>
                </span>
            </button>
        </>
    )
}

const Navbar = () => {

    const menuItems = [
        {
            label: 'Menu 1',
            link: '#',
        },
        {
            label: 'Menu 2',
            link: '#',
        },
        {
            label: 'Menu 3',
            link: '#',
        },
        {
            label: 'Menu 4',
            link: '#',
        },
        {
            label: 'Menu 5',
            link: '#',
        },
        {
            label: 'Menu 6',
            link: '#',
        },
        {
            label: 'Menu 7',
            link: '#',
        },
    ];

    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="py-4 border border-slate-400 bg-white">
            <nav className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 mr-6 backdrop-blur-md">
                    <span className="font-semibold text-xl tracking-tight font-righteous text-4xl">MyBrand</span>
                </div>
                <div className="flex items-center gap-3">
                    <CartButton />
                    <div
                        onClick={() => setShowMenu(!showMenu)} // Toggle the state to show/hide the menu
                        className="relative"
                        ref={menuRef}
                    >
                        <Image src={'/../public/avatar.png'} width={40} height={40} className="border border-slate-950 rounded-full" />
                        {showMenu && (
                            <div className="absolute top-12 -right-3 w-56 bg-white border border-gray-300 rounded-lg shadow-md z-10">
                                <nav>
                                    <ul className="flex flex-col">
                                        {menuItems.map((menuItem, index) => (
                                            <li key={index} className={`min-h-[40px] flex items-center hover:bg-purple-100`}>
                                                <Link href={menuItem.link} className={`w-full`}>
                                                    <span className='px-3'>{menuItem.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
