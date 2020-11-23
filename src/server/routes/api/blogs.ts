import * as express from 'express';
import db from '../../db';

const router = express.Router();

const isAdmin: express.RequestHandler = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

router.get('/', async (req, res) => {
    try{
        const blogs = await db.Blogs.getBlogs();
        res.json(blogs);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', isAdmin, async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [blog] = await db.Blogs.getBlog(id);
        res.json(blog);
    } catch (err) {
        console.log(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        res.json(await db.Blogs.editBlog(req.body.title, req.body.content, req.body.id));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/', async(req: express.Request, res: express.Response) => {
    console.log('test');
    try {
         const author = req.body.author;
         const blog = req.body.blog;
         const blogtags = req.body.tags;
         const newAuthor = await db.Authors.newAuthor(author.name)
         const newBlog = await db.Blogs.writeBlog(blog.title, blog.content, newAuthor.insertId);
         const newBlogTags = await db.Tags.newTag(newBlog.insertId, blogtags);

        res.status(200).send(`
        author created with id: ${newAuthor.insertId}
        blog created with id: ${newBlog.insertId}
        `);
         
    } catch (e) {
        console.log(e);
        res.status(500).send(e); 
    }
});

router.delete('/:id', async (req, res) => {
    try {
        res.json(await db.Blogs.deleteBlog(parseInt(req.params.id)));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;