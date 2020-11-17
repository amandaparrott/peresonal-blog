import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const blogs = await db.Blogs.getBlogs();
        res.json(blogs);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
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

router.post('/', async(req, res) => {
    try {
        const name = req.body.name;
        let newAuthor = await db.Authors.newAuthor(name);
        console.log(newAuthor);
        res.json(await db.Blogs.writeBlog(req.body.title, req.body.content, newAuthor.insertId)[0]);
    } catch (e) {
        console.log(e);
        res.sendStatus(500); 
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