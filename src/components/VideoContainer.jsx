import React, { useEffect, useState } from 'react'
import { fetchData } from '../utils/apiCalls';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const json = fetchData();
        json.then((res) => setVideos(res.items));
    }, []);


    return (
        <div className='flex flex-wrap overflow-hidden align-middle justify-center'>
            {
                videos.map(video => (

                    <Link key={video.id} to={"/watch?v=" + video.id} ><VideoCard info={video} /> </Link>
                ))
            }
        </div>



    )
}

export default VideoContainer