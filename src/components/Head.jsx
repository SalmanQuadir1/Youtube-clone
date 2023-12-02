import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();
    return (
        <div className='grid grid-flow-col p-4  my-1 shadow-lg'>
            <div className='flex col-span-1'>
                <img className='h-14 cursor-pointer' onClick={() => dispatch(toggleMenu())} src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="hamburger" />
                <img className='h-14' src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="" />

            </div>
            <div className='col-span-10 text-center   my-2'>
                <input className='border border-gray-600 p-2 rounded-l-full w-2/4 ' type="text" />
                <button className='border border-gray-600 px-5 py-2 rounded-r-full'>🔍</button>
            </div>
            <div className='col-span-1 mt-3'>
                <img className='h-8' src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user" />
            </div>
        </div>
    )
}

export default Head