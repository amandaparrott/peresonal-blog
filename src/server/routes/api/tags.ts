import * as express from 'express';
import DB from '../../db';

const router = express.Router();

router.get('/blogs/:id/tags', async (req, res) => {
    try {
        res.json(await DB.Tags.getBlogTags(req.params.id))
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get(`/`, async (req, res) => {
    try {
        res.json(await DB.Tags.getAllTags());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;