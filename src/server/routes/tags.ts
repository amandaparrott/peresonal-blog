import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/blogs/:id/tags', async (req, res) => {
    try {
        res.json(await db.Tags.getBlogTags(req.params.id))
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get(`/tags`, async (req, res) => {
    try {
        res.json(await db.Tags.getAllTags());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;