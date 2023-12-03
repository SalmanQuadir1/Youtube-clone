import React from 'react'
import Button from './Button'
const list = ["All", "Gaming", "Live", "Songs"];
const ButtonList = () => {
    return (
        <div className='flex p-2'>
            <Button name="All" />
            <Button name="Gaming" />
            <Button name="Live" />
            <Button name="Songs" />
            <Button name="News" />
            <Button name="Cricket" />
            <Button name="Cocomelon" />
            <Button name="Rhymes" />
            <Button name="Cooking" />
            <Button name="Electronics" />
        </div>
    )
}

export default ButtonList