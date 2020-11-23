import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setTokenSourceMapRange } from 'typescript';

const AddBlog: React.FC<IAddBlogProps> = props => {
    const [name, setName] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleClick = (e) => {
        e.preventDefault();
        newBlog();
    }

    const history = useHistory();

    const newBlog = async () => {
        const blog = {
            name: name,
            title: title,
            content: content
        };
        let res = await fetch("/api/blogs", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        })
        if (res.ok) {
            console.log('blog posted');
            history.push('/');
        } else {
            console.log('blog not posted');
        }
    }
    return (
        <div className="container">
            <div className="form-group">
                <label>Author</label>
                <input 
                type="text"
                className="form-control" 
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ></input>
                <label>Title</label>
                <input 
                type="text"
                className="form-control" 
                placeholder="Blog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ></input>
                    <label>Select a Tag</label>
                    <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Blog It Out!</label>
                    <textarea 
                    type="text"
                    className="form-control" 
                    rows="3"
                    placeholder="Your Blog Entry Here"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <button 
                    className="btn btn-secondary rounded" 
                    onClick={e => handleClick(e)}
                    >Post</button>
                </div>
            </div>
    );
};

interface IAddBlogProps extends RouteComponentProps {}
export default AddBlog;