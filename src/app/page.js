"use client"
import { useEffect, useState } from 'react';

export default function Home() {
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
      <div className=''>
        <div className='bg-purple-600 flex items-center justify-around py-2'>
          <div className='flex items-center gap-6'>
            <div className='hover:rotate-[8deg] transition-all cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
            </div>
            <ul className='flex items-center gap-4'>
              <li>Blog</li>
              <li>Themes</li>
              <li>Icons</li>
              <li>Exaples</li>
              <li>Docs</li>
            </ul>
          </div>
          <div className='flex gap-2 items-center justify-start rounded-xl p-2 hover:shadow-[0px_0px_2px_6px_#f6ad55] transition-all border border-gray-200'>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className='text-gray-200'><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span className='text-gray-200'>Search</span>
            <div className='text-gray-200 bg-purple-700 p-1 rounded ml-12'>ctrl K</div>
          </div>
          <div className='relative'>
            <div className='flex items-center' onClick={toggleShowDarkOrLightModeMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-200">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-200">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <ul className={`${showDarkOrLightModeMenu ? "flex" : "hidden"} absolute flex-col bg-white rounded px-4 py-1 gap-2`}>
              <li onClick={toggleTheme}>Dark</li>
              <li onClick={toggleTheme}>Light</li>
              <li onClick={toggleTheme}>Auto</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full h-[500px] bg-gray-100 dark:bg-gray-900'>

      </div>
    </>
  )
}
