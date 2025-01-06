"use client"
import Close from '@/icons/Close';
import Collective from '@/icons/Collective';
import Github from '@/icons/Github';
import MobileMenu from '@/icons/MobileMenu';
import Twitter from '@/icons/Twitter';
import { Button, Drawer, Menu, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Moon from '@/icons/Moon';
import Sun from '@/icons/Sun';

function Header() {
    const items = [
        {
            key: '1',
            label: "v5 releases",
            disabled: true,
        },
        {
            key: '2',
            label: "v5.2.3",
        },
        {
            key: '3',
            label: "v5.1.3",
        },
        {
            key: '4',
            label: "v5.0.3",
        },
        {
            key: '5',
            label: "Previous releases",
            disabled: true,
        },
        {
            key: '6',
            label: "v4.6.x",
        },
        {
            key: '7',
            label: "v3.4.1",
        },
        {
            key: '8',
            label: "v2.3.2",
        },
        {
            key: '9',
            label: "All versions",
        },
    ];
    const [isModalOpenMobileMenu, setIsModalOpenMobileMenu] = useState(false);
    const toggleShowMobileMenu = () => {
        setIsModalOpenMobileMenu(!isModalOpenMobileMenu);
    };

    const [showDarkOrLightModeMenu, setShowDarkOrLightModeMenu] = useState(false)
    const toggleShowDarkOrLightModeMenu = () => {
        setShowDarkOrLightModeMenu(!showDarkOrLightModeMenu);
    };
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') || 'light';
        setTheme(currentTheme);
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }, []);
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <div className='text-gray-200'>
                <div className='bg-[#712cf9] flex items-center justify-around py-2 dark:bg-gray-600 transition-all'>
                    <div className='flex items-center gap-6 lg:gap-2 '>
                        <div className='hover:-rotate-[8deg] hover:scale-[1.1] transition-all cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="40" height="32" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                        </div>
                        <ul className='flex items-center gap-4 sm:hidden md:hidden lg:gap-2'>
                            <li className='hover:text-gray-50'>Docs</li>
                            <li className='hover:text-gray-50'>Exaples</li>
                            <li className='hover:text-gray-50'>Icons</li>
                            <li className='hover:text-gray-50'>Themes</li>
                            <li className='hover:text-gray-50'>Blog</li>
                        </ul>
                    </div>
                    <div className='sm:hidden md:hidden flex gap-2 items-center justify-start rounded-md px-2 py-1 opacity-80 hover:opacity-100 hover:shadow-[0px_0px_2px_2px_#ffe484] transition-all border border-gray-200'>
                        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className=' '><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span>Search</span>
                        <div className='bg-purple-700 px-2  rounded ml-24'>ctrl K</div>
                    </div>
                    <div className='flex items-center gap-12 lg:gap-4 sm:hidden md:hidden'>
                        <div className='flex items-center gap-6  lg:gap-4'>
                            <div><Github /></div>
                            <div><Twitter /></div>
                            <div><Collective /></div>
                        </div>
                        <Dropdown
                            menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    v5.3
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <div className='relative'>
                            <div className='flex items-center' onClick={toggleShowDarkOrLightModeMenu}>
                                {
                                    theme === 'dark' ? <Moon /> : <Sun />
                                }
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6  ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <ul className={`${showDarkOrLightModeMenu ? "flex" : "hidden"} absolute flex-col bg-white text-gray-900 dark:bg-gray-400 rounded gap-2 overflow-hidden border shadow`}>
                                <li className='hover:bg-gray-100 w-full text-center transition-all cursor-pointer px-4 py-1 flex items-center gap-1' onClick={toggleTheme}>
                                    <Moon />
                                    <span> Dark</span>
                                </li>
                                <li className='hover:bg-gray-100 w-full text-center transition-all cursor-pointer px-4 py-1 flex items-center gap-1' onClick={toggleTheme}>
                                    <Sun />
                                    <span> Light</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden sm:inline md:inline'>
                        <MobileMenu toggleShowMobileMenu={toggleShowMobileMenu} />
                    </div>
                </div>
            </div>

            <Drawer title="Bootstrap" closeIcon={<Close />} open={isModalOpenMobileMenu} onClose={toggleShowMobileMenu}>
                <ul className='grid grid-cols-2 mt-4 gap-4'>
                    <li className='hover:text-gray-50'>Docs</li>
                    <li className='hover:text-gray-50'>Exaples</li>
                    <li className='hover:text-gray-50'>Icons</li>
                    <li className='hover:text-gray-50'>Themes</li>
                    <li className='hover:text-gray-50'>Blog</li>
                </ul>
                <div className='grid grid-cols-2 gap-4 border-t border-gray-300 pt-4 mt-4'>
                    <div className='flex items-center gap-2'><Github />Github</div>
                    <div className='flex items-center gap-2'><Twitter />Twitter</div>
                    <div className='flex items-center gap-2'><Collective />Collective</div>
                </div>
                <div className='grid grid-cols-2 gap-4 border-t border-gray-300 pt-4 mt-4'>
                    <Dropdown
                        menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Bootstrap v5.3
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </Drawer>
        </>
    )
}

export default Header