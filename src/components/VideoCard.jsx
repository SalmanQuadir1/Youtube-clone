import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, thumbnails, title } = snippet;
    const { likeCount, viewCount } = statistics;
    return (
        <div className='shadow-lg overflow-hidden m-2  w-60 rounded-lg'>
            <img className="w-full h-40" src={thumbnails?.medium?.url} alt="" />
            <div className='p-2'>
                <p className='font-bold'>{title}</p>
                <p>{channelTitle}</p>
                <p>{viewCount}views</p>
                <p>{likeCount}♥</p>
            </div>
        </div>
    )
}

export default VideoCard