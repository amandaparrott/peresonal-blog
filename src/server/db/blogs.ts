import { Query } from './index';

const writeBlog = async (title: string, content: string, authorid: number) => Query<{insertId: number}>(`
INSERT INTO blogs(title, content, authorid)
VALUES (?, ?, ?)
`, [title, content, authorid]);

const getBlogs = () => Query(`
SELECT
    blogs.*,
    authors.name
 FROM blogs
 JOIN authors ON authors.id = blogs.authorid    
`);

const getBlog = (id: any) => Query(`
SELECT
    blogs.*,
    authors.name
 FROM blogs
 JOIN authors ON authors.id = blogs.authorid
 WHERE blogs.id = ?
 ORDER BY blogs.id DESC   
`, [id]);

const editBlog = async (title: string, content: string, id: number) => Query(`
    UPDATE blogs
    SET title = ?, content = ?
    WHERE id = ?;
`, [title, content, id]);

const deleteBlog = async (id: number) => Query(`
    DELETE FROM  blogs
    WHERE id = ?    
`, [id]);


export default {
    writeBlog,
    getBlogs,
    getBlog,
    editBlog,
    deleteBlog
}
