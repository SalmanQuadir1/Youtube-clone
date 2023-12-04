import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, thumbnails, title } = snippet;
    const { likeCount, viewCount } = statistics;
    return (
        <div className='shadow-lg overflow-hidden m-2   w-60 rounded-lg h-4/5'>
            <img className="w-full h-40 rounded-lg" src={thumbnails?.medium?.url} alt="" />
            <div className='px-2'>
                <p className='font-bold'>{title}</p>
                <p>{channelTitle}</p>
                <p>{viewCount}views</p>
                <p>{likeCount}♥</p>
            </div>
        </div>
    )
}

export default VideoCard