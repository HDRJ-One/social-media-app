// src/pages/Explore.js
import React, { useState, useEffect } from 'react';

function Explore() {
    const [trendingPosts, setTrendingPosts] = useState([]);

    useEffect(() => {
        // Simulate fetching trending posts
        setTimeout(() => {
            setTrendingPosts([
                { id: 1, type: 'photo', src: 'https://source.unsplash.com/random/800x800', likes: 230, comments: 30 },
                { id: 2, type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', likes: 350, comments: 50 },
                { id: 3, type: 'photo', src: 'https://source.unsplash.com/random/800x800', likes: 180, comments: 20 },
                { id: 4, type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', likes: 320, comments: 45 },
            ]);
        }, 1000);
    }, []);

    return (
        <div className="p-4 grid grid-cols-2 gap-4">
            {trendingPosts.map(post => (
                <div key={post.id} className="border rounded-lg overflow-hidden shadow-lg">
                    {post.type === 'video' ? (
                        <video className="w-full" controls>
                            <source src={post.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img className="w-full" src={post.src} alt="Trending" />
                    )}
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-4">
                                <button className="text-red-500">❤️ {post.likes}</button>
                                <button className="text-blue-500">💬 {post.comments}</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Explore;
