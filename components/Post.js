// src/components/Post.js
import React from 'react';

function Post({ post }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            {post.type === 'video' ? (
                <video className="w-full" controls>
                    <source src={post.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img className="w-full" src={post.src} alt="Post" />
            )}
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                        <button className="text-red-500">❤️ {post.likes}</button>
                        <button className="text-blue-500">💬 {post.comments}</button>
                    </div>
                    <button className="text-green-500">🔄 Share</button>
                </div>
            </div>
        </div>
    );
}

export default Post;
