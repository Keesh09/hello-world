import React, { useContext } from 'react'
import { MyContext } from './MainData'

const ReceivedData = () => {
    const { theme, toggleTheme } = useContext(MyContext)
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen border border-gray-800 rounded-sm'>
                <p>Current theme: <label className='bg-blue-300 rounded-lg px-3 py-1' htmlFor="">{theme}</label> </p>
                <button onClick={toggleTheme} class="mt-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                    Toggle Theme
                </button>
            </div>
        </>
    )
}

export default ReceivedData
