import { useState, useEffect } from 'react';
import Button from '../global/Button';
import { Category } from '../global/Icons';
const VideoBackground = () => {
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        async function fetchVideo() {
            const res = await fetch('/video-bg.mp4');
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            setVideoUrl(url);
        }
        fetchVideo();
    }, []);

    return (
        <div className='w-full h-96 relative overflow-hidden mb-3'>
            {videoUrl && (
                <video className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover object-center' autoPlay muted loop>
                    <source src={videoUrl} type='video/mp4' />
                </video>
            )}
            <div className='absolute top-0 left-0 w-full h-full flex flex-col bg-black bg-opacity-80 justify-center items-center'>
                <h1 className='text-white text-4xl font-bold mb-4 text-center'>Shop Local, Support Local Businesses</h1>
                <h2 className='text-white text-md font-medium mb-8 text-center'>Discover unique and authentic products from local businesses in your community <br /> and help support your local economy</h2>
                <form className='bg-white flex items-center rounded-full py-2 px-4 w-1/2 mb-7'>
                    <input className='rounded-md bg-white w-full py-2 px-4 mr-2 text-gray-700 leading-tight focus:outline-none' id='search' type='text' placeholder='Search Products, Vendors.......' />
                </form>
                <div className="relative">
                    <button className="px-6 py-3 bg-gray-300 rounded-md flex items-center justify-center gap-2">
                        <Category />
                        <span className="text-gray-700 font-medium text-lg">Browse Categories</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default VideoBackground;
