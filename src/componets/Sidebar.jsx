import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <>
            <nav className="sidebar xl:pl-[10%] pl-[5%] xl:flex w-full">
                <ul className='flex text-nowrap  overflow-x-auto xl:overflow-x-hidden scrollbar-hidden bg-white shadow-md xl:flex-col xl:shadow-none font-medium xl:mt-3 '>

                    <Link to={"/WomenFashionProducts"} className="block xl:text-sm md:text-[10px] text-[10px] xl:px-4 xl:py-2 text-[#FFFFFF flex items-center gap-3 xl:hover:bg-gray-200  hover:rounded">
                        Woman's Fashion
                        <span className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <FaAngleRight />
                        </span>
                    </Link>

                    <Link to={"/MensFashionProducts"} className="block xl:text-sm md:text-[10px] text-[10px] xl:px-4 xl:py-2 text-[#FFFFFF flex items-center gap-3 xl:hover:bg-gray-200  hover:rounded">
                        Man's Fashion
                        <span className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <FaAngleRight />
                        </span>
                    </Link>

                    <Link to={"/Electronics"} className="block xl:text-sm md:text-[10px] text-[10px] xl:px-4 xl:py-2 text-[#FFFFFF flex items-center gap-3 xl:hover:bg-gray-200  hover:rounded">
                        Electronics
                        <span className="opacity-0 text-sm  transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <FaAngleRight />
                        </span>
                    </Link>

                    <li className="block xl:text-sm md:text-[10px] text-[10px] xl:px-4 xl:py-2 text-[#FFFFFF flex items-center gap-3 xl:hover:bg-gray-200  hover:rounded">
                        Home & Lifestyle
                        <span className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <FaAngleRight />
                        </span>
                    </li>

                    <li className="block xl:text-sm md:text-[10px] text-[10px] xl:px-4 xl:py-2 text-[#FFFFFF flex items-center gap-3 xl:hover:bg-gray-200  hover:rounded">
                        Medicine
                        <span className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <FaAngleRight />
                        </span>
                    </li>

                    <li className="block xl:text-sm md:text-[10px] text-[10px] xl:px-4 xl:py-2 text-[#FFFFFF flex items-center gap-3 xl:hover:bg-gray-200  hover:rounded">
                        Sports & Outdoor
                        <span className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <FaAngleRight />
                        </span>
                    </li>

                    <li className="block xl:text-sm md:text-[10px] text-[10px] xl:px-4 xl:py-2 text-[#FFFFFF flex items-center gap-3 xl:hover:bg-gray-200 hover:rounded">
                        Baby's & Toys
                        <span className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <FaAngleRight />
                        </span>
                    </li>

                    <li className="block xl:text-sm md:text-[10px] text-[10px] xl:px-4 xl:py-2 text-[#FFFFFF flex items-center gap-3 xl:hover:bg-gray-200  hover:rounded">
                        Groceries & Pets
                        <span className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <FaAngleRight />
                        </span>
                    </li>

                    <li className="block xl:text-sm md:text-[10px] text-[10px] xl:px-4 xl:py-2 text-[#FFFFFF flex items-center gap-3 xl:hover:bg-gray-200  hover:rounded">
                        Health & Beauty
                        <span className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <FaAngleRight />
                        </span>
                    </li>
                </ul>
                <div className="line lg:block hidden w-px bg-gray-600"></div>

            </nav>
        </>
    )
}

export default Sidebar
