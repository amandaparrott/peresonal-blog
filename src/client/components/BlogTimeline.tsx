import React from 'react';
import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const ChirpsTimeline: React.FC<IBlogsProps> = props => {
    const [blogs, setBlogs] = useState<IBlogs[]>([])

    useEffect(() => {
        const getBlogs = async () => {
            let res = await fetch('/api/blogs');
            if (res.ok) {
                let blogs = await res.json();
                blogs = blogs.reverse();
                setBlogs(blogs);
            }
        }
        getBlogs();
    }, []);
    return (
        <div className="container py-5">
            {blogs.map((blogs) => (<BlogCard blogs={blogs} key={blogs.id} />))}
        </div>
    )
}

interface IBlogs {
    id: string,
    title: string,
    content: string,
    authorid: string,
    name: string
}

interface IBlogsProps { }

export default ChirpsTimeline;