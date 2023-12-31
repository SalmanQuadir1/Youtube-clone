import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParam] = useSearchParams();
    const searchVideoKey = searchParam.get("v");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());

    }, [])
    return (
        <div className='flex flex-col'>
            <div className='m-5 '>
                <iframe width="800" height="445" src={"https://www.youtube.com/embed/" + searchVideoKey + "?autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <CommentsContainer />

        </div>
    )
}

export default WatchPage