import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard: React.FC<IBlogCardProps> = props => {
    return (
        <div className="container py-4">
        <div className="card text-center">
            <div className="card-header">
                Author: {props.blogs.name}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.blogs.title}</h5>
                <p className="card-text">{props.blogs.content}</p>
                <Link to={`/${props.blogs.id}/admin`} >
                    <button className="btn btn-secondary rounded">Admin</button>
                </Link>
            </div>
            <div className="card-footer text-muted">
                Tags: (ain't ready yet)
             </div>
        </div>
        </div>
    )
};

interface IBlogCardProps {
    blogs: {
        id: string,
        title: string,
        content: string,
        authorid: string,
        name: string
    }
}

export default BlogCard;