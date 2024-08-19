// src/components/Feed.js (Updated)
import React, { useState, useEffect, useRef } from 'react';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const observer = useRef();

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const fetchPosts = () => {
        setLoading(true);
        setTimeout(() => {
            setPosts(prevPosts => [
                ...prevPosts,
                { id: page * 4 + 1, type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', likes: 120, comments: 15 },
                { id: page * 4 + 2, type: 'photo', src: 'https://source.unsplash.com/random/800x600', likes: 89, comments: 12 },
                { id: page * 4 + 3, type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', likes: 140, comments: 20 },
                { id: page * 4 + 4, type: 'photo', src: 'https://source.unsplash.com/random/800x600', likes: 102, comments: 25 },
            ]);
            setLoading(false);
        }, 1000);
    };

    const lastPostRef = node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    };

    return (
        <div className="p-4 space-y-4">
            {posts.map((post, index) => {
                if (posts.length === index + 1) {
                    return <Post ref={lastPostRef} key={post.id} post={post} />;
                } else {
                    return <Post key={post.id} post={post} />;
                }
            })}
            {loading && <div>Loading more posts...</div>}
        </div>
    );
}

export default Feed;
