import { YOUTUBE_VIDEOS_API } from "./constants";


export const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    return json;
}