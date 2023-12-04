import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestionList, setSuggestionList] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);


    useEffect(() => {

        //Debouncing with 200ms
        const timer = setTimeout(() => getSearchSuggestions(), 200);
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        console.log("API CALL-", searchQuery);
        console.log(suggestionList)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestionList(json[1]);

    }


    const dispatch = useDispatch();

    return (
        <div className='grid grid-flow-col p-4  my-1 shadow-lg'>
            <div className='flex col-span-1'>
                <img className='h-14 cursor-pointer' onClick={() => dispatch(toggleMenu())} src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="hamburger" />
                <img className='h-14' src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="" />

            </div>
            <div className='col-span-10 px-10  my-2'>
                <div>
                    <input className='border border-gray-600 p-2 rounded-l-full w-4/6'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        type="text" />
                    <button className='border border-gray-600 px-5 bg-slate-100 py-2 rounded-r-full'>🔍</button>

                </div>
                {showSuggestions !== "" && (


                    <div className='fixed px-2 py-5 w-[35rem] bg-white shadow-lg rounded-lg border border-gray-100'>
                        <ul>
                            {suggestionList && suggestionList.map(suggesion => (
                                <li key={suggesion} className='py-2 shadow-sm hover:bg-gray-100 cursor-pointer flex '>🔍 {suggesion}</li>
                            ))}



                        </ul>
                    </div>
                )}
            </div>
            <div className='col-span-1 mt-3'>
                <img className='h-8' src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user" />
            </div>
        </div>
    )
}

export default Head