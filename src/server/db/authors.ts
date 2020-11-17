import { Query } from './index';

interface IAuthors{
    id?: number,
    name?: string,
    email?: string,
    _created?: Date
}

const newAuthor = (name: string) => Query(`
INSERT INTO authors (name)
VALUES (?)
`, [name]);

export default {
    newAuthor
}