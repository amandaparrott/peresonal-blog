import * as express from 'express';
import DB from '../../db';
import { HashPassword } from '../../utils/security/passwords';
import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let user = req.body;
        user.password = HashPassword(req.body.password);
        let result: any = await DB.Authors.insert(
            user.email, 
            user.name, 
            user.password);
        let token = await CreateToken({ userid: result.insertId });
        res.json({
            token,
            role: 'guest',
            userid: result.insertId,
        });
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;