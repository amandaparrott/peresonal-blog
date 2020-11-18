import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams, RouteComponentProps } from 'react-router-dom';


const EditBlog: React.FC<IEditProps> = (props: IEditProps) => {
    const [name, setName] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/blogs/${props.match.params.id}`);
            let blog = await res.json();
            setTitle(blog.title);
            setContent(blog.content);
        })()
    }, []);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const editBlog = async (id: string) => {
        const blog = {
            id: id,
            name: name,
            title: title,
            content: content
        };

        let res = await fetch(`/api/blogs/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        if (res.ok) {
            props.history.push('/');
            console.log('blog edited');
        } else {
            console.log('chirp edit failed');
        }
    };

    const deleteBlog = async (id: string) => {
        let res = await fetch(`/api/blogs/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            console.log('blog deleted');
            props.history.push('/');
        } else {
            console.log('delete not successful');
        }   
    };

    return (
    <div className="container">
        <div className="editcard container">
        <div className="card row text-center d-flex justify-content-center m-3 shadow-lg border border-info rounded">
            <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
                <textarea className="card-text col" defaultValue={title} onChange={(e) => handleTitleChange(e)}></textarea>
                <textarea className="card-text col" defaultValue={content} onChange={(e) => handleContentChange(e)}></textarea>
                <button className="btn btn-secondary rounded mx-4" onClick={() => editBlog(props.match.params.id)}>Save Edit</button>
                <button className="btn btn-secondary rounded mx-4" onClick={() => deleteBlog(props.match.params.id)}>Delete Blog</button>
            </div>
        </div>
        </div>
    </div>

    )
}

interface IEditProps extends RouteComponentProps<{id: string}> { }
export default EditBlog;